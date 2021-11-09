

const AreaArray = () => {

    const Areas = [
        {
            'id': '#001',
            'areaName': 'Buganda',
            'numberOfAgents': 450,
        },
        {
            'id': '#002',
            'areaName': 'Lango',
            'numberOfAgents': 34,
        },
        {
            'id': '#003',
            'areaName': 'Teso',
            'numberOfAgents': 100,
        },
        {
            'id': '#004',
            'areaName': 'Bugweri',
            'numberOfAgents': 65,
        },
    ]
   
    return (  
        <div className="divArray">  
            <h1>Opareta Areas</h1>
            <hr />
            {Areas.map((area, index) => ( 
                <>
                <div className='arrayElement' data-index={index}>
                    <li>Area ID: {area.id}</li>
                    <li>Area Name: {area.areaName}</li>
                    <li>Registered Agents: {area.numberOfAgents}</li>
                </div>
                <hr/>
                </>
                   
                ))}  
        </div>  
      ); 
}


export default AreaArray
