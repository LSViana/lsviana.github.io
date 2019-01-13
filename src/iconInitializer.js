import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faAt,
    faBicycle,
    faFutbol,
    faCodeBranch,
    faDraftingCompass,
    faMagic,
    faGamepad,
    faVrCardboard,
    faSuperscript,
    faDove,
    faUserAstronaut,
    faAward,
} from '@fortawesome/free-solid-svg-icons'
import {
    faStackOverflow,
    faGithub
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faAt)
library.add(faBicycle)
library.add(faFutbol)
library.add(faCodeBranch)
library.add(faDraftingCompass)
library.add(faMagic)
library.add(faGamepad)
library.add(faVrCardboard)
library.add(faSuperscript)
library.add(faDove)
library.add(faUserAstronaut)
library.add(faAward)

library.add(faStackOverflow)
library.add(faGithub)

Vue.component('fa-icon', FontAwesomeIcon)