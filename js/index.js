import {Carosel} from './carosel.js';

const sectionHaut = document.querySelector('.diapo')
const sectionBoule = document.querySelector('.boule')
const op = {
    visible:1,
    active:true,
    defile:1,
    auto:true
}
new Carosel(sectionHaut,op)