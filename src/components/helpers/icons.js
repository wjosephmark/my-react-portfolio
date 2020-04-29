import { library } from "@fortawesome/fontawesome-svg-core"


import {
    faTrash,
    faSignOutAlt,
    faEdit,
    faAtom,
    faPlusCircle,
    faPhone,
    faEnvelope,
    faMapMarkedAlt
  } from "@fortawesome/free-solid-svg-icons"

  const Icons= () => {
    library.add(faTrash, faSignOutAlt, faEdit, faAtom, faPhone, faEnvelope, faMapMarkedAlt)
  }

  export default Icons