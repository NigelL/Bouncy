main.width = window.innerWidth;
main.height = window.innerHeight;

window.onresize = () => {
    main.width = window.innerWidth;
    main.height = window.innerHeight;
}

(function init() {
     renderCanvas = new Render(main);
})();