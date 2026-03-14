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
        fontFamily: document.getElementById('fontFamily').value,
        panelBg: document.getElementById('panelBg').checked
      };
      saveAllPresets(presets);
      refreshPresetDropdown();
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
      document.getElementById('displayTitle').textContent = document.getElementById('titleText').value || '今天喝了幾杯飲料';
      document.getElementById('displayTitle').style.fontSize = `${document.getElementById('titleSize').value}px`;
      document.getElementById('displayPercent').style.fontSize = `${document.getElementById('statusSize').value}px`;
      updateProgressDisplay(progressEl.value, totalEl.value);

      // Apply panel background (default to true for backward compat)
      const panelBgEnabled = preset.panelBg !== undefined ? preset.panelBg : true;
      document.getElementById('panelBg').checked = panelBgEnabled;
      document.getElementById('displayPanelBg').classList.toggle('glass-panel-bg', panelBgEnabled);
    }

    function deletePreset(name) {
      const presets = loadAllPresets();
      delete presets[name];
      saveAllPresets(presets);
      refreshPresetDropdown();
    }

    function refreshPresetDropdown() {
      const dropdown = document.getElementById('presetSelect');
      const optionsList = dropdown.querySelector('.custom-dropdown-options');
      const presets = loadAllPresets();
      const names = Object.keys(presets).sort();

      // Clear existing options
      optionsList.innerHTML = '';

      // Create <li> elements for each preset
      for (const n of names) {
        const li = document.createElement('li');
        li.className = 'custom-dropdown-option';
        li.setAttribute('role', 'option');
        li.setAttribute('aria-selected', 'false');
        li.id = `preset-opt-${n.replace(/\s+/g, '-')}`;
        li.dataset.value = n;
        li.tabIndex = -1;
        li.textContent = n;
        optionsList.appendChild(li);
      }
    }

    // --- Custom Dropdown Behavior ---
    function openDropdown(dropdown) {
      dropdown.classList.add('open');
      const trigger = dropdown.querySelector('.custom-dropdown-trigger');
      if (trigger) {
        trigger.setAttribute('aria-expanded', 'true');
      }
      // Focus first option or currently selected option
      const options = dropdown.querySelectorAll('[role="option"]');
      const currentValue = dropdown.dataset.value;
      let toFocus = null;
      for (const opt of options) {
        if (opt.dataset.value === currentValue) {
          toFocus = opt;
          break;
        }
      }
      if (!toFocus && options.length > 0) {
        toFocus = options[0];
      }
      if (toFocus) {
        toFocus.focus();
        if (trigger) {
          trigger.setAttribute('aria-activedescendant', toFocus.id || '');
        }
      }
    }

    function closeDropdown(dropdown) {
      dropdown.classList.remove('open');
      const trigger = dropdown.querySelector('.custom-dropdown-trigger');
      if (trigger) {
        trigger.setAttribute('aria-expanded', 'false');
        trigger.removeAttribute('aria-activedescendant');
        trigger.focus();
      }
    }

    function selectOption(dropdown, option) {
      const value = option.dataset.value;
      const text = option.textContent;
      dropdown.dataset.value = value;
      const trigger = dropdown.querySelector('.custom-dropdown-trigger');
      if (trigger) {
        trigger.textContent = text;
      }
      // Mark selected option with aria-selected
      const allOptions = dropdown.querySelectorAll('[role="option"]');
      for (const opt of allOptions) {
        opt.setAttribute('aria-selected', opt === option ? 'true' : 'false');
      }
      // Dispatch change event
      dropdown.dispatchEvent(new CustomEvent('change', {
        bubbles: true,
        detail: { value, text }
      }));
      closeDropdown(dropdown);
    }

    // Close dropdowns when clicking outside
    document.addEventListener('click', (event) => {
      const dropdowns = document.querySelectorAll('.custom-dropdown.open');
      for (const dropdown of dropdowns) {
        if (!dropdown.contains(event.target)) {
          closeDropdown(dropdown);
        }
      }
    });

    // Toggle dropdown on trigger click
    document.addEventListener('click', (event) => {
      const trigger = event.target.closest('.custom-dropdown-trigger');
      if (!trigger) return;
      const dropdown = trigger.closest('.custom-dropdown');
      if (!dropdown) return;
      event.stopPropagation();
      if (dropdown.classList.contains('open')) {
        closeDropdown(dropdown);
      } else {
        // Close other open dropdowns first
        const openDropdowns = document.querySelectorAll('.custom-dropdown.open');
        for (const d of openDropdowns) {
          closeDropdown(d);
        }
        openDropdown(dropdown);
      }
    });

    // Option selection on click
    document.addEventListener('click', (event) => {
      const option = event.target.closest('[role="option"]');
      if (!option) return;
      const dropdown = option.closest('.custom-dropdown');
      if (!dropdown) return;
      event.stopPropagation();
      selectOption(dropdown, option);
    });

    // Keyboard navigation for dropdowns
    document.addEventListener('keydown', (event) => {
      const dropdown = event.target.closest('.custom-dropdown');
      if (!dropdown) return;

      const trigger = dropdown.querySelector('.custom-dropdown-trigger');
      const options = Array.from(dropdown.querySelectorAll('[role="option"]'));
      if (options.length === 0) return;

      const isOpen = dropdown.classList.contains('open');
      const focusedOption = document.activeElement.closest('[role="option"]');
      let currentIndex = focusedOption ? options.indexOf(focusedOption) : -1;

      switch (event.key) {
        case 'ArrowDown':
          event.preventDefault();
          if (!isOpen) {
            openDropdown(dropdown);
          } else {
            const nextIndex = currentIndex < options.length - 1 ? currentIndex + 1 : 0;
            options[nextIndex].focus();
            if (trigger) {
              trigger.setAttribute('aria-activedescendant', options[nextIndex].id || '');
            }
          }
          break;

        case 'ArrowUp':
          event.preventDefault();
          if (!isOpen) {
            openDropdown(dropdown);
          } else {
            const prevIndex = currentIndex > 0 ? currentIndex - 1 : options.length - 1;
            options[prevIndex].focus();
            if (trigger) {
              trigger.setAttribute('aria-activedescendant', options[prevIndex].id || '');
            }
          }
          break;

        case 'Enter':
          if (isOpen && focusedOption) {
            event.preventDefault();
            selectOption(dropdown, focusedOption);
          } else if (!isOpen && event.target === trigger) {
            event.preventDefault();
            openDropdown(dropdown);
          }
          break;

        case 'Escape':
          if (isOpen) {
            event.preventDefault();
            closeDropdown(dropdown);
          }
          break;

        case ' ':
          // Space to open/select (common accessibility pattern)
          if (!isOpen && event.target === trigger) {
            event.preventDefault();
            openDropdown(dropdown);
          } else if (isOpen && focusedOption) {
            event.preventDefault();
            selectOption(dropdown, focusedOption);
          }
          break;
      }
    });

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
        const presetSelect = document.getElementById('presetSelect');
        presetSelect.dataset.value = presetNames[0];
        const trigger = presetSelect.querySelector('.custom-dropdown-trigger');
        if (trigger) trigger.textContent = presetNames[0];
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
            displayTitle.textContent = target.value || '今天喝了幾杯飲料';
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
          case 'panelBg':
            document.getElementById('displayPanelBg').classList.toggle('glass-panel-bg', target.checked);
            break;
        }
      });

      // Change event for checkbox controls (ensures toggle works in all browsers)
      controlForm.addEventListener('change', (event) => {
        const target = event.target;
        if (target.id === 'panelBg') {
          document.getElementById('displayPanelBg').classList.toggle('glass-panel-bg', target.checked);
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

      // Preset event handlers (custom dropdown dispatches change event on container)
      document.getElementById('presetSelect').addEventListener('change', () => {
        const presetSelect = document.getElementById('presetSelect');
        const selectedValue = presetSelect.dataset.value;
        if (selectedValue) loadPreset(selectedValue);
      });

      document.getElementById('presetSave').addEventListener('click', () => {
        const nameInput = document.getElementById('presetName');
        const presetSelect = document.getElementById('presetSelect');
        const name = nameInput.value.trim() || presetSelect.dataset.value;
        if (name) {
          savePreset(name);
          nameInput.value = '';
          // Update dropdown's data-value and trigger text to show the saved preset
          presetSelect.dataset.value = name;
          const trigger = presetSelect.querySelector('.custom-dropdown-trigger');
          if (trigger) trigger.textContent = name;
        }
      });

      document.getElementById('presetDelete').addEventListener('click', () => {
        const presetSelect = document.getElementById('presetSelect');
        const currentValue = presetSelect.dataset.value;
        if (currentValue) {
          deletePreset(currentValue);
          // After deletion, select first remaining preset or clear selection
          const presets = loadAllPresets();
          const names = Object.keys(presets).sort();
          const trigger = presetSelect.querySelector('.custom-dropdown-trigger');
          if (names.length > 0) {
            presetSelect.dataset.value = names[0];
            if (trigger) trigger.textContent = names[0];
            loadPreset(names[0]);
          } else {
            presetSelect.dataset.value = '';
            if (trigger) trigger.textContent = '';
          }
        }
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
