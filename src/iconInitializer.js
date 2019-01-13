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
    faGlobe,
    faCode,
    faFingerprint,
    faServer,
    faMobileAlt,
} from '@fortawesome/free-solid-svg-icons'
import {
    faLinkedinIn,
    faGithub,
    faNodeJs,
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
library.add(faGlobe)
library.add(faCode)
library.add(faFingerprint)
library.add(faServer)
library.add(faMobileAlt)

library.add(faLinkedinIn)
library.add(faGithub)
library.add(faNodeJs)

Vue.component('fa-icon', FontAwesomeIcon)