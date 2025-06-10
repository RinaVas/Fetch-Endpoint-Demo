import { useState, useEffect } from "react";
import { CardContainer, Card } from "../UI/Card.jsx";
import "./Modules.scss";

function Modules(){

  // Initialisation ------------------------------
  const newModule = {
      ModuleID: Math.floor(10000 * Math.random()),
      ModuleName: "New Module",
      ModuleCode: "CI9999",
      ModuleLevel: 4,
      ModuleLeaderID: null,
      ModuleImageURL: "https://images.freeimages.com/images/small-previews/9b8/electronic-components-2-1242738.jpg",
    };
    const apiURL = "https://softwarehub.uk/unibase/api";
    const modulesEndpoint = `${apiURL}/modules`;
  // State ---------------------------------------
    const [modules, setModules] = useState(null);

    // API Fetch -----------------------------------
    const apiGet = async (endpoint) => {
      try {
        const response = await fetch(endpoint);
        const result = await response.json();
        setModules(result);
      } catch (error) {
        console.error("Error fetching modules:", error);
        setModules([]);
      }
    };

    // Effect --------------------------------------
    useEffect(() => {
      apiGet(modulesEndpoint);
    }, [modulesEndpoint]);

    // Handlers ------------------------------------
    const handleAdd = (module) => {
      setModules([...modules, module]);
      console.log(`Length of modules: ${modules.length}`);
    };

    // View ----------------------------------------
    return (
    <>
      <h1>Modules</h1>
      {!modules ? (
        <p>Loading records ...</p>
      ) : modules.length === 0 ? (
        <p>No records found.</p>
      ) : (
        <>
          <CardContainer>
            {modules.map((module) => {
              return (
                <div className="moduleCard" key={module.ModuleCode}>
                  <Card>
                    <p>{module.ModuleCode}</p>
                    <p>{module.ModuleName}</p>
                    <img
                      src={module.ModuleImageURL}
                      alt={module.ModuleCode}
                    />
                  </Card>
                </div>
              );
            })}
          </CardContainer>
          <button onClick={() => handleAdd(newModule)}>Add module</button>
        </>
      )}
    </>
  );
}

export default Modules;