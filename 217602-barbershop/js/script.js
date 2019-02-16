 var login = document.querySelector('.user_login');
            var popup = document.querySelector('.modal_login');
            var close = popup.querySelector('.modal_close');
            var loginOverlay = document.querySelector('.modal_overlay');

            var form = popup.querySelector('.login_form');
            var formLogin = form.querySelector('[name="login_form_login"]');
            var formPassword = form.querySelector('[name="login_form_password"]');
            var storage = localStorage.getItem('login');

            login.addEventListener('click', function(event) {
                event.preventDefault();
                popup.classList.add('modal_login_show');
                loginOverlay.classList.add('modal_overlay_open');

                if (storage) {
                    formLogin.value = storage;
                    formPassword.focus();
                } else {
                    formLogin.focus();
                }
            });

            form.addEventListener('submit', function(event) {
                if (formLogin.value.trim() === '' || formPassword.value.trim() === '') {
                    event.preventDefault();
                    popup.classList.remove('modal_error');
                    popup.offsetWidth = popup.offsetWidth;
                    popup.classList.add('modal_error');
                } else {
                    localStorage.setItem('login', formLogin.value);
                }
            });

            close.addEventListener('click', function(event) {
                event.preventDefault();
                popup.classList.remove('modal_login_show');
                popup.classList.remove('modal_error');
                loginOverlay.classList.remove('modal_overlay_open');
            });

            loginOverlay.addEventListener('click', function() {
                popup.classList.remove('modal_login_show');
                loginOverlay.classList.remove('modal_overlay_open');
            });

            window.addEventListener('keydown', function(event) {
                if (event.keyCode === 27) {
                    if (popup.classList.contains('modal_login_show')) {
                        popup.classList.remove('modal_login_show');
                        loginOverlay.classList.remove('modal_overlay_open');
                    }
                }
            });

            var link = document.querySelector('.map_open');
            var open = document.querySelector('.modal_map');
            var overlay = document.querySelector('.modal_overlay');
            var close = open.querySelector('.modal_close');

            link.addEventListener('click', function(event) {
                event.preventDefault();
                open.classList.add('modal_open');
                overlay.classList.add('modal_overlay_open');
            });

            close.addEventListener('click', function(event) {
                event.preventDefault();
                open.classList.remove('modal_open');
                overlay.classList.remove('modal_overlay_open');
            });

            overlay.addEventListener('click', function() {
                open.classList.remove('modal_open');
                overlay.classList.remove('modal_overlay_open');
            });

            window.addEventListener('keydown', function(event) {
                if (event.keyCode === 27) {
                    if (open.classList.contains('modal_open')) {
                        open.classList.remove('modal_open');
                        overlay.classList.remove('modal_overlay_open');
                    }
                }
            });
            
            var link = document.querySelector('.map_open_1');
            var open = document.querySelector('.modal_map');
            var overlay = document.querySelector('.modal_overlay');
            var close = open.querySelector('.modal_close');

            link.addEventListener('click', function(event) {
                event.preventDefault();
                open.classList.add('modal_open');
                overlay.classList.add('modal_overlay_open');
            });

            close.addEventListener('click', function(event) {
                event.preventDefault();
                open.classList.remove('modal_open');
                overlay.classList.remove('modal_overlay_open');
            });

            overlay.addEventListener('click', function() {
                open.classList.remove('modal_open');
                overlay.classList.remove('modal_overlay_open');
            });

            window.addEventListener('keydown', function(event) {
                if (event.keyCode === 27) {
                    if (open.classList.contains('modal_open')) {
                        open.classList.remove('modal_open');
                        overlay.classList.remove('modal_overlay_open');
                    }
                }
            });