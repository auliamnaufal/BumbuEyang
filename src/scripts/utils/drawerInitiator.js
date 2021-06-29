const DrawerInitiator = {
  init({
    button, drawer, content, links,
  }) {
    button.addEventListener('click', (e) => {
      this._toggleDrawer(e, drawer, button);
    });

    content.addEventListener('click', (e) => {
      this._closeDrawer(e, drawer, button);
    });

    links.forEach((link) => {
      link.addEventListener('click', (e) => {
        this._closeDrawer(e, drawer, button);
      });
    });
  },

  _toggleDrawer(event, drawer, button) {
    drawer.classList.toggle('open');
    button.classList.toggle('active');
    event.stopPropagation();
  },

  _closeDrawer(event, drawer, button) {
    drawer.classList.remove('open');
    button.classList.remove('active');
    event.stopPropagation();
  },
};

export default DrawerInitiator;
