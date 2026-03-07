    // --- Preset Persistence (namespace + CRUD) ---
    function getStorageKey() {
      const params = new URLSearchParams(window.location.search);
      const instance = params.get('instance') || 'default';
      return `obs-slider-${instance}-presets`;
    }

    function loadAllPresets() {
      try {
        return JSON.parse(localStorage.getItem(getStorageKey())) || {};
      } catch { return {}; }
    }

    function saveAllPresets(presets) {
      localStorage.setItem(getStorageKey(), JSON.stringify(presets));
    }

    function savePreset(name) {
      const trimmed = (name || '').trim();
      if (!trimmed) return;
      const presets = loadAllPresets();
      presets[trimmed] = {
        titleText: document.getElementById('titleText').value,
        titleSize: Number(document.getElementById('titleSize').value),
        totalVal: Number(document.getElementById('totalVal').value),
        progressVal: Number(document.getElementById('progressVal').value),
        themeColor: document.getElementById('themeColor').value,
        statusSize: Number(document.getElementById('statusSize').value),
        fontFamily: document.getElementById('fontFamily').value
      };
      saveAllPresets(presets);
      refreshPresetDropdown();
      document.getElementById('presetSelect').value = trimmed;
    }

    function loadPreset(name) {
      const presets = loadAllPresets();
      const preset = presets[name];
      if (!preset) return;

      const fields = ['titleText', 'titleSize', 'totalVal', 'progressVal', 'themeColor', 'statusSize', 'fontFamily'];
      for (const key of fields) {
        if (preset[key] !== undefined) {
          const el = document.getElementById(key);
          if (el) el.value = preset[key];
        }
      }

      // Sync totalVal → progressVal max
      const totalEl = document.getElementById('totalVal');
      const progressEl = document.getElementById('progressVal');
      progressEl.max = Math.max(1, Number(totalEl.value) || 1);
      if (Number(progressEl.value) > Number(progressEl.max)) {
        progressEl.value = progressEl.max;
      }

      // Apply theme color
      const hex = (preset.themeColor || '').trim();
      if (/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/.test(hex)) {
        document.documentElement.style.setProperty('--theme-color', hex);
        document.getElementById('themeColor').style.borderLeftColor = hex;
      }

      // Apply font
      if (preset.fontFamily && preset.fontFamily.trim()) {
        loadGoogleFont(preset.fontFamily.trim());
        applyFont(preset.fontFamily.trim());
      }

      // Sync display
      document.getElementById('displayTitle').textContent = document.getElementById('titleText').value || '吃了幾碗飯';
      document.getElementById('displayTitle').style.fontSize = `${document.getElementById('titleSize').value}px`;
      document.getElementById('displayPercent').style.fontSize = `${document.getElementById('statusSize').value}px`;
      updateProgressDisplay(progressEl.value, totalEl.value);
    }

    function deletePreset(name) {
      const presets = loadAllPresets();
      delete presets[name];
      saveAllPresets(presets);
      refreshPresetDropdown();
    }

    function refreshPresetDropdown() {
      const select = document.getElementById('presetSelect');
      const presets = loadAllPresets();
      const names = Object.keys(presets).sort();
      select.innerHTML = '';
      for (const n of names) {
        const opt = document.createElement('option');
        opt.value = n;
        opt.textContent = n;
        select.appendChild(opt);
      }
    }

    const FALLBACK_FONTS = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";

    function loadGoogleFont(fontName) {
      const encoded = encodeURIComponent(fontName);
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = `https://fonts.googleapis.com/css2?family=${encoded}&display=swap`;
      document.head.appendChild(link);
    }

    function applyFont(fontName) {
      document.body.style.fontFamily = `'${fontName}', ${FALLBACK_FONTS}`;
    }

    function debounce(fn, delay) {
      let timer;
      return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), delay);
      };
    }

    const debouncedLoadAndApply = debounce((fontName) => {
      if (fontName.trim()) {
        loadGoogleFont(fontName.trim());
        applyFont(fontName.trim());
      }
    }, 500);

    function updateProgressDisplay(current, total) {
      const validTotal = Math.max(1, Number(total) || 1);
      const validCurrent = Math.max(0, Math.min(validTotal, Number(current) || 0));

      const progressBar = document.getElementById('myProgressBar');
      const progressFill = document.getElementById('myProgressFill');
      const displayPercent = document.getElementById('displayPercent');

      if (progressFill) {
        progressFill.style.transform = `scaleY(${validCurrent / validTotal})`;
      }
      if (displayPercent) {
        displayPercent.innerHTML = `${validCurrent}<br>/<br>${validTotal}`;
      }
      if (progressBar) {
        progressBar.setAttribute('aria-valuenow', validCurrent);
        progressBar.setAttribute('aria-valuemax', validTotal);
      }
    }

    document.addEventListener('DOMContentLoaded', () => {
      const controlForm = document.getElementById('controlForm');
      const displayTitle = document.getElementById('displayTitle');

      // Initialize default preset if none exist, then auto-load first
      refreshPresetDropdown();
      let presets = loadAllPresets();
      if (Object.keys(presets).length === 0) {
        savePreset('default');
        presets = loadAllPresets();
      }
      const presetNames = Object.keys(presets).sort();
      if (presetNames.length > 0) {
        document.getElementById('presetSelect').value = presetNames[0];
        loadPreset(presetNames[0]);
      }

      // Initialize display with form values (handles both preset-loaded and default cases)
      const initialProgress = document.getElementById('progressVal').value;
      const initialTotal = document.getElementById('totalVal').value;
      const initialTitle = document.getElementById('titleText').value;
      const initialSize = document.getElementById('titleSize').value;
      const initialStatusSize = document.getElementById('statusSize').value;
      
      document.getElementById('progressVal').max = initialTotal;
      updateProgressDisplay(initialProgress, initialTotal);
      displayTitle.textContent = initialTitle;
      displayTitle.style.fontSize = `${initialSize}px`;
      document.getElementById('displayPercent').style.fontSize = `${initialStatusSize}px`;

      // Apply font (may already be set by preset, but ensures correct state)
      const initialFont = document.getElementById('fontFamily').value;
      applyFont(initialFont);

      // Real-time sync via input event delegation (no submit needed)
      controlForm.addEventListener('input', (event) => {
        const target = event.target;
        switch (target.id) {
          case 'titleText':
            displayTitle.textContent = target.value || '吃了幾碗飯';
            break;
          case 'titleSize':
            displayTitle.style.fontSize = `${target.value}px`;
            break;
          case 'totalVal': {
            const newTotal = Math.max(1, Number(target.value) || 1);
            const progressSlider = document.getElementById('progressVal');
            progressSlider.max = newTotal;
            if (Number(progressSlider.value) > newTotal) {
              progressSlider.value = newTotal;
            }
            updateProgressDisplay(progressSlider.value, newTotal);
            break;
          }
          case 'progressVal':
            updateProgressDisplay(target.value, document.getElementById('totalVal').value);
            break;
          case 'themeColor': {
            const hex = target.value.trim();
            if (/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/.test(hex)) {
              document.documentElement.style.setProperty('--theme-color', hex);
              target.style.borderLeftColor = hex;
            }
            break;
          }
          case 'statusSize':
            document.getElementById('displayPercent').style.fontSize = `${target.value}px`;
            break;
          case 'fontFamily':
            debouncedLoadAndApply(target.value);
            break;
        }
      });

      document.getElementById('progressDec').addEventListener('click', () => {
        const slider = document.getElementById('progressVal');
        const newVal = Math.max(0, Number(slider.value) - 1);
        slider.value = newVal;
        slider.dispatchEvent(new Event('input', { bubbles: true }));
      });

      document.getElementById('progressInc').addEventListener('click', () => {
        const slider = document.getElementById('progressVal');
        const newVal = Math.min(Number(slider.max), Number(slider.value) + 1);
        slider.value = newVal;
        slider.dispatchEvent(new Event('input', { bubbles: true }));
      });

      document.getElementById('flipLayout').addEventListener('click', () => {
        const container = document.getElementById('layoutContainer');
        const display = document.getElementById('displayPanel');
        container.classList.toggle('flex-row-reverse');
        display.classList.toggle('justify-end');
        display.classList.toggle('justify-start');
      });

      // Preset event handlers
      document.getElementById('presetSelect').addEventListener('change', (e) => {
        if (e.target.value) loadPreset(e.target.value);
      });

      document.getElementById('presetSave').addEventListener('click', () => {
        const nameInput = document.getElementById('presetName');
        const select = document.getElementById('presetSelect');
        const name = nameInput.value.trim() || select.value;
        if (name) {
          savePreset(name);
          nameInput.value = '';
        }
      });

      document.getElementById('presetDelete').addEventListener('click', () => {
        const select = document.getElementById('presetSelect');
        if (select.value) deletePreset(select.value);
      });

      // --- README Panel ---
      fetch('./README.md')
        .then(response => {
          if (!response.ok) throw new Error(`HTTP ${response.status}`);
          return response.text();
        })
        .then(md => {
          const readmeContent = document.getElementById('readmeContent');
          if (readmeContent && typeof marked !== 'undefined') {
            readmeContent.innerHTML = marked.parse(md);
          } else if (readmeContent) {
            readmeContent.innerHTML = '<p class="text-white/50 text-sm">Markdown 解析器載入失敗</p>';
          }
        })
        .catch(err => {
          const readmeContent = document.getElementById('readmeContent');
          if (readmeContent) {
            readmeContent.innerHTML = '<p class="text-white/50 text-sm">無法載入 README.md</p>';
          }
        });
    });
