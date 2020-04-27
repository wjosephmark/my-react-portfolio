import { library } from "@fortawesome/fontawesome-svg-core"


import {
    faTrash,
    faSignOutAlt,
    faEdit,
    faAtom,
    faPlusCircle
  } from "@fortawesome/free-solid-svg-icons"

  const Icons= () => {
    library.add(faTrash, faSignOutAlt, faEdit, faAtom, faPlusCircle)
  }

  export default Icons