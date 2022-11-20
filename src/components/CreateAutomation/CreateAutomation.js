import React from "react";
import "./CreateAutomation.css";

function CreateAutomation() {

    return (
        <div>
            <h1>New automation</h1>
            <h3>At PrivTAP we like to call this feature: If this then that</h3>
            <br/><br/>
            <div className="row">
                <div className="column">
                    <div className="triggerActionContainer">
                        <h2>Trigger</h2>
                        <div>
                            <span>Platform:</span>
                            <select name="cars" id="cars">
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>
                        </div>
                        <div>
                            <span>Event:</span>
                            <select name="cars" id="cars">
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>
                        </div>
                        <br/><br/>
                        <h3>Which data would You like to get from this trigger?</h3>
                        <div>
                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                            <label htmlFor="vehicle1"> I have a bike</label><br/>
                            <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/>
                            <label htmlFor="vehicle2"> I have a car</label><br/>
                            <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
                            <label htmlFor="vehicle3"> I have a boat</label><br/>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="triggerActionContainer">
                        <h2>Action</h2>
                        <div>
                            <span>Platform:</span>
                            <select name="cars" id="cars">
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>
                        </div>
                        <div>
                            <span>Event:</span>
                            <select name="cars" id="cars">
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>
                        </div>
                        <br/><br/>
                        <h3>Which data would You like to share with this action?</h3>
                        <div>
                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                            <label htmlFor="vehicle1"> I have a bike</label><br/>
                            <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/>
                            <label htmlFor="vehicle2"> I have a car</label><br/>
                            <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
                            <label htmlFor="vehicle3"> I have a boat</label><br/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateAutomation;