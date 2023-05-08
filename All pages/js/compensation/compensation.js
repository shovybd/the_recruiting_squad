const rangeOne = document.querySelector('input[name="rangeOne"]');
        const rangeTwo = document.querySelector('input[name="rangeTwo"]');
        const outputOne = document.querySelector('.outputOne');
        const outputTwo = document.querySelector('.outputTwo');
        const inclRange = document.querySelector('.incl-range');
      
        function updateView() {
          if (this.getAttribute('name') === 'rangeOne') {
            outputOne.innerHTML = `$ ${this.value}`;
            outputOne.style.left = `${(this.value / this.getAttribute('max')) * 100}%`;
          } else {
            outputTwo.style.left = `${(this.value / this.getAttribute('max')) * 100}%`;
            outputTwo.innerHTML = `$ ${this.value}`;
          }
      
          if (parseInt(rangeOne.value) > parseInt(rangeTwo.value)) {
            inclRange.style.width = `${((rangeOne.value - rangeTwo.value) / this.getAttribute('max')) * 100}%`;
            inclRange.style.left = `${(rangeTwo.value / this.getAttribute('max')) * 100}%`;
          } else {
            inclRange.style.width = `${((rangeTwo.value - rangeOne.value) / this.getAttribute('max')) * 100}%`;
            inclRange.style.left = `${(rangeOne.value / this.getAttribute('max')) * 100}%`;
          }
        }
      
        document.addEventListener('DOMContentLoaded', function () {
          updateView.call(rangeOne);
          updateView.call(rangeTwo);
      
          const rangeInputs = document.querySelectorAll('input[type="range"]');
          for (let i = 0; i < rangeInputs.length; i++) {
            rangeInputs[i].addEventListener('mouseup', function () {
              this.blur();
            });
            rangeInputs[i].addEventListener('input', function () {
              updateView.call(this);
            });
          }
        });
      
        // value shift to input
        const fromSlider = document.getElementById('from_slider_comp');
        const toSlider = document.getElementById('to_slider_comp');
        const fromCompensation = document.getElementById('from_compensation_new');
        const toCompensation = document.getElementById('to_compensation_new');
      
        fromSlider.addEventListener('change', function () {
          fromCompensation.value = `$ ${this.value}`;
        });
      
        toSlider.addEventListener('change', function () {
          toCompensation.value = `$ ${this.value}`;
        });
        fromCompensation.addEventListener('input', function () {
            fromSlider.value = this.value;
        });
        toCompensation.addEventListener('input', function () {
            toSlider.value = this.value;
        });
