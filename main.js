document.addEventListener("DOMContentLoaded", function () {
  const itemElements = document.querySelectorAll(".MenuItem");
  const homeElement = document.querySelector(".home");
  const titleElement = document.querySelector(".title");
  const itemList = document.querySelector(".itemList");

  function showHome(content) {
    homeElement.textContent = content;
    homeElement.classList.add("show");
  }

  function hideHome() {
    homeElement.classList.remove("show");
    setTimeout(() => {
      homeElement.textContent = "";
    }, 0); // Match the duration of the CSS transition
  }

  titleElement.addEventListener("mouseenter", function () {
    showHome("Home");
  });

  titleElement.addEventListener("mouseleave", function () {
    hideHome();
  });

  itemElements.forEach(function (itemElement) {
    itemElement.addEventListener("mouseenter", function () {
      showHome(itemElement.textContent);
    });
  });

  itemList.addEventListener("mouseleave", function () {
    hideHome();
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const sectionItems = document.querySelectorAll(".section__item");
  const textItem = document.querySelector(".main-info");



  // Define the text content for each section item
  const itemTexts = {
    "École de Technologie Supérieur (ETS)": `
        <h1  style="font-size: max(20px, 2vw)">Technological Academic Path</h1>
        <section class="section">
          The École de technologie supérieure (ÉTS) offers a University Pathway
          in Technology, designed for students passionate about science and
          technology, providing a practical foundation for bachelor's degrees.
          The program emphasizes hands-on experience in a high-tech environment
          and prepares students for the real-world application of their skills.
          <br /><br />
          ÉTS focuses on cooperative education and is involved in research in
          energy, environment, aerospace, IT, microelectronics, and health
          technologies. Located in Montreal, it houses the Centech technology
          business accelerator and student technical clubs engaged in
          international competitions. The university fosters innovation with
          students clubs
          <br /><br />
          ÉTS ranks
          <a
            href="https://www.etsmtl.ca/en/about-ets/presentation"
            style="color: black"
            ><u>fourth</u></a
          >
          among Canadian universities for <strong>research intensity</strong>.
        </section>
    `,
    "Concordia University": `
      <h2>Concordia University</h2>
      <p>Computer Science Courses</p>
      <p>2018 - 2020</p>
      <ul>
        <li>Completed foundational programming courses</li>
        <li>Studied algorithms and data structures</li>
        <li>Participated in coding competitions</li>
      </ul>
    `,
    "Pratt & Whitney": `
      <h2>Pratt & Whitney</h2>
      <p>Software Engineering Intern</p>
      <p>Summer 2023</p>
      <ul>
        <li>Developed automation tools for testing procedures</li>
        <li>Collaborated with cross-functional engineering teams</li>
        <li>Implemented data analysis solutions</li>
      </ul>
    `
  };

  sectionItems.forEach((item) => {
    item.addEventListener("click", () => {
      const isActive = item.classList.contains("section__item--active");
      


      // Remove active class from all items
      sectionItems.forEach((otherItem) => {
        otherItem.classList.remove("section__item--active");
      });

      // If the clicked item wasn't active, make it active and show its text
      if (!isActive) {
        item.classList.add("section__item--active");
        textItem.innerHTML = itemTexts[item.textContent.trim()];
      } else {
        // If it was active, clear the text
        textItem.innerHTML = "Information coming soon...";
      }
    });
  });
});


