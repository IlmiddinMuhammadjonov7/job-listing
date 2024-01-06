const divEl = document.querySelector("#joy");

const BASE_URL = "http://localhost:3000";

async function getSubjects() {
  const res = await fetch(`${BASE_URL}/data`);
  return res.json();
}

async function render() {
  const yangi = await getSubjects();
  let html = "";
  yangi.forEach((element) => {
    html += `
            <div class="tort">
                <div class="tort_bir">
                    <img src='${element.logo}' class='img2'/>
                    <div><p class="tort_ikki">
                    <span class="tort_uch">${element.company}</span>
                    <span class="tort_tort">NEW!</span>
                </p>
                <p class="tort_besh">${element.position}</p>
                <p><span class="tort_olti">${element.postedAt} / </span><span class="tort_olti">${element.contract} / </span><span class="tort_olti">usa</span></p></div>
                </div>
                <div class="tort_yetti">
                    ${element.languages}
                </div>
            </div>
        `;
  });
  divEl.innerHTML = html;
}
render();
