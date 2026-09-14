document.addEventListener("DOMContentLoaded", function () {

  const tabs = document.querySelectorAll(".tab");
  const contents = document.querySelectorAll(".tab-content");


  function showTab(tabName) {

    tabs.forEach(function (tab) {
      tab.classList.toggle(
        "active",
        tab.dataset.tab === tabName
      );
    });


    contents.forEach(function (content) {
      content.classList.toggle(
        "active",
        content.id === tabName
      );
    });

  }


  tabs.forEach(function (tab) {

    tab.addEventListener("click", function () {

      const tabName = this.dataset.tab;

      showTab(tabName);

      /*
       * Update the URL without reloading the page.
       * This allows links such as:
       *
       *   workshop/index.html#programme
       *
       * to open directly on the Programme tab.
       */

      history.replaceState(
        null,
        "",
        "#" + tabName
      );

    });

  });


  /*
   * Open the tab specified in the URL.
   */

  const initialTab = window.location.hash.substring(1);

  if (
    initialTab &&
    document.getElementById(initialTab) &&
    document.querySelector(
      '.tab[data-tab="' + initialTab + '"]'
    )
  ) {
    showTab(initialTab);
  }

});
