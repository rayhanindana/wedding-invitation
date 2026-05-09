import { data } from "../assets/data/data.js";
import {getType} from "../utils/helper.js";

export const time = () => {
    const timeContainer = document.querySelector('.time');
    const [marriageDiv, receptionDiv] = timeContainer.querySelectorAll('div div');
    const mapLink = timeContainer.querySelector('a');
    const addressParagraph = timeContainer.querySelector('div + p');

    const createTimeListItem = (title, details) => (
        `<h3>${title}</h3>
         <p>${details.day}, ${details.date} ${details.month} ${details.year} <br>
         Pukul ${details.hours.start}${details.hours.finish ? ` sd ${details.hours.finish}`: ''} WIB</p>`
    );

    if(getType() === 'fa') {
        marriageDiv.style.display = "none";
    }

    marriageDiv.innerHTML = createTimeListItem('Akad', data.time.marriage);
    receptionDiv.innerHTML = createTimeListItem('Resepsi', data.time.reception);

    mapLink.href = data.link.map;
    addressParagraph.innerHTML = data.time.address.split('|').map(s => s.trim()).filter(s => s).join('<br>');
};
