
        $(window).scroll(function () {
            if ($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
                $('#mob-nav').hide(1000);
            } else {
                $('#mob-nav').show(1000);
            }
        });


let switches = document.getElementsByClassName('choose-color');
let style = localStorage.getItem('style');

        if (style == null) {
        setTheme('themes-green');
        } else {
        setTheme(style);
        }

        for (let i of switches) {
        i.addEventListener('click', function () {
            let theme = this.dataset.theme;
            setTheme(theme);
        });
        }

        function setTheme(theme) {
        if (theme == 'themes-green') {
            document.getElementById('switcher-id').href = 'assets/style.css';
        } else if (theme == 'themes-red') {
            document.getElementById('switcher-id').href = 'assets/themes/red.css';
        } else if (theme == 'themes-blue') {
            document.getElementById('switcher-id').href = 'assets/themes/blue.css';
        }
        localStorage.setItem('style', theme);
        }