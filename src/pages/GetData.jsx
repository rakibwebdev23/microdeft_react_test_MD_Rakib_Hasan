import { useEffect, useState } from "react";

const GetData = () => {
    const [informations, setInformations] = useState([]);
    console.log(informations);
    
    useEffect(() => {
        fetch('https://react-interview.crd4lc.easypanel.host/api/login')
            .then(res => res.json())
            .then(data => setInformations(data))
    }, [])
    return (
        <div>
            {
                informations.map(information => <ul key={information._id}>
                    <li>{ information.name}</li>
                </ul>)
            }
        </div>
    );
};

export default GetData;