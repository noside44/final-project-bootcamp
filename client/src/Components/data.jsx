import { HiLightBulb } from "react-icons/hi";
import { RiRemoteControl2Fill } from "react-icons/ri";
import { MdBlinds } from "react-icons/md";

const data = {
    user : "user",
    pass: "pass",
    admin: true,
    name: "Juan García",
    email: "juangarcia@gmail.com",
    rol: "Administrador"
    }

const app_devices = [{
    type: "Control de luz",
    reference: "CL-0001",
    image: <HiLightBulb className="device-img"/>,
    // state:"on",
    // room: "Luz Cocina"
    },
    {
    type: "Control de Persiana",
    reference: "CP-0001",
    image: <MdBlinds className="device-img"/>,
    // state:"on",
    // room: "Luz Cocina"
    },
    {
    type: "Control Infrarrojo",
    reference: "CI-0001",
    image: <RiRemoteControl2Fill className="device-img"/>,
    // state:"on",
    // room: "Luz Cocina"
    },
    {
    type: "Control Infrarrojo",
    reference: "CI-0002",
    image: <RiRemoteControl2Fill className="device-img"/>,
    // state:"on",
    // room: "Luz Cocina"
    },
]

const user_devices = [{
    type: "Control de luz",
    reference: "CL-0001",
    state:"off",
    room: "Luz Cocina",
    image: <HiLightBulb className="device-img"/>,
    },
    {
    type: "Control de luz",
    reference: "CL-0001",
    state:"on",
    room: "Luz Habitación",
    image: <HiLightBulb className="device-img"/>,
    },
    {
    type: "Control Infrarrojo",
    reference: "CI-0001",
    state:"on",
    room: "Control TV Sala",
    image: <RiRemoteControl2Fill className="device-img"/>,
    },
    {
    type: "Control Infrarrojo",
    reference: "Control de persiana",
    state:"off",
    room: "Persiana Habitación",
    image: <MdBlinds className="device-img"/>,
    }
]

export { data, app_devices, user_devices }

