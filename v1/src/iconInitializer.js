import Vue from 'vue'
import {library} from '@fortawesome/fontawesome-svg-core'
import {
    faAsterisk,
    faPaintBrush,
    faAt,
    faAward,
    faBicycle,
    faCode,
    faCodeBranch,
    faDove,
    faDraftingCompass,
    faFingerprint,
    faFutbol,
    faGamepad,
    faGlobe,
    faMagic,
    faMobileAlt,
    faMoon,
    faServer,
    faSun,
    faSuperscript,
    faTrophy,
    faUniversity,
    faUserAstronaut,
    faVrCardboard
} from '@fortawesome/free-solid-svg-icons';
import {faBehance, faGithub, faLinkedinIn, faNodeJs, faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

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
library.add(faMoon)
library.add(faPaintBrush)
library.add(faSun)
library.add(faCode)
library.add(faFingerprint)
library.add(faAsterisk)
library.add(faServer)
library.add(faMobileAlt)
library.add(faTrophy)
library.add(faUniversity)

library.add(faLinkedinIn)
library.add(faGithub)
library.add(faNodeJs)
library.add(faWhatsapp)
library.add(faBehance)

Vue.component('fa-icon', FontAwesomeIcon)
