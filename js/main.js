(function () {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const fields = {
    fullName: {
      el: document.getElementById('fullName'),
      err: document.getElementById('nameError'),
      validate: v => {
        if (!v.trim()) return 'Full name is required.';
        if (v.trim().length < 2) return 'Name must be at least 2 characters.';
        if (!/^[a-zA-Z\s'-]+$/.test(v.trim())) return 'Name contains invalid characters.';
        return '';
      }
    },
    email: {
      el: document.getElementById('email'),
      err: document.getElementById('emailError'),
      validate: v => {
        if (!v.trim()) return 'Email address is required.';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim())) return 'Please enter a valid email address.';
        return '';
      }
    },
    subject: {
      el: document.getElementById('subject'),
      err: document.getElementById('subjectError'),
      validate: v => v ? '' : 'Please select a subject.'
    },
    message: {
      el: document.getElementById('message'),
      err: document.getElementById('messageError'),
      validate: v => {
        if (!v.trim()) return 'Message is required.';
        if (v.trim().length < 10) return 'Message must be at least 10 characters.';
        if (v.trim().length > 1000) return 'Message must be under 1000 characters.';
        return '';
      }
    }
  };

  function showError(key, msg) {
    fields[key].err.textContent = msg;
    fields[key].el.classList.add('input-error');
  }
  function clearError(key) {
    fields[key].err.textContent = '';
    fields[key].el.classList.remove('input-error');
  }
  function clearAll() {
    Object.keys(fields).forEach(k => clearError(k));
  }

  Object.keys(fields).forEach(key => {
    fields[key].el.addEventListener('blur', () => {
      const msg = fields[key].validate(fields[key].el.value);
      msg ? showError(key, msg) : clearError(key);
    });
    fields[key].el.addEventListener('input', () => clearError(key));
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    clearAll();
    let isValid = true;
    Object.keys(fields).forEach(key => {
      const msg = fields[key].validate(fields[key].el.value);
      if (msg) { showError(key, msg); isValid = false; }
    });

    const status = document.getElementById('formStatus');
    if (isValid) {
      status.textContent = 'Thank you! Your message has been sent successfully.';
      status.className = 'form-status success';
      form.reset();
      setTimeout(() => { status.textContent = ''; status.className = 'form-status'; }, 5000);
    } else {
      status.textContent = 'Please fix the errors above and try again.';
      status.className = 'form-status error';
    }
  });
})();
