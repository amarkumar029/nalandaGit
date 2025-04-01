import React, {useState} from "react";
import axios from "axios";
import baseUrl from "../../navigation/base";
import { useNavigate } from "react-router-dom";

// reactstrap components
import {
  DropdownMenu,
  DropdownItem,
  Button,
  Modal,
  Card,
  CardBody,
  FormGroup,
  Form,
  Input,
} from "reactstrap";

function DemoNavbar () {

    //date
    var someDate = new Date();
    var numberOfDaysToAdd = 0;
    var date = someDate.setDate(someDate.getDate() + numberOfDaysToAdd);
    var defaultValue = new Date(date).toISOString().split("T")[0];
    //date

    const [toggleModals,setToggleModals] = useState(false);
    
    const toggleModal = (state) => {
        setToggleModals(!toggleModals)
       
    };
    
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post(`${baseUrl}/api/enquery/`, inputs).then(function(response){
        alert("Your Form Has Been Submited Successfully");
        setInputs({});
        // console.log(response.data);
        navigate('/');
        });
    }
    
    return (
        <>
            <DropdownMenu>
                <DropdownItem onClick={() => toggleModal(toggleModals)}>
                Register For VTST
                </DropdownItem>
            </DropdownMenu>
            <Modal
                className="modal-dialog-centered"
                size="sm"
                isOpen={toggleModals}
                toggle={() => toggleModal(toggleModals)}
            >
                <div className="modal-header">
                    <h6 className="modal-title text-center w-100" id="modal-title-default">
                        Register for <br /> Vision Test Scholarship Test
                    </h6>
                    <button
                        aria-label="Close"
                        className="close"
                        data-dismiss="modal"
                        type="button"
                        onClick={() => toggleModal(toggleModals)}
                    >
                        <span aria-hidden={true}>×</span>
                    </button>
                </div>
                <div className="modal-body p-0">
                    <Card className="bg-secondary shadow border-0">
                        <CardBody>
                            <Form role="form" onSubmit={handleSubmit}>
                                <Input
                                    type="hidden"
                                    id="date"
                                    name="date"
                                    defaultValue={defaultValue}
                                    onChange={handleChange}
                                />
                                <FormGroup>
                                    <Input
                                        placeholder="Please Enter Name"
                                        type="text"
                                        name="studentName"
                                        id="studentName"
                                        onChange={handleChange}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Input
                                        placeholder="Please Enter Mobile"
                                        type="number"
                                        name="mobile"
                                        id="mobile"
                                        onChange={handleChange}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Input
                                        placeholder="Please Enter Email"
                                        type="email"
                                        name="email"
                                        id="email"
                                        onChange={handleChange}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Input
                                        placeholder="Please Enter Password"
                                        type="password"
                                        name="password"
                                        id="password"
                                        onChange={handleChange}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <select name="class" id="class" className="form-control" 
                                        onChange={handleChange} required="">
                                        <option value="">Please Select Class</option>
                                        <option value="Nursery"> Nursery </option>
                                        <option value="L.K.G"> L.K.G </option>
                                        <option value="U.K.G"> U.K.G </option>
                                        <option value="I"> I </option>
                                        <option value="II"> II </option>
                                        <option value="III"> III </option>
                                        <option value="IV"> IV </option>
                                        <option value="V"> V </option>
                                        <option value="VI"> VI </option>
                                        <option value="VII"> VII </option>
                                        <option value="VIII"> VIII </option>
                                        <option value="IX"> IX </option>
                                        <option value="X"> X </option>
                                        <option value="XI">XI </option>
                                        <option value="XII"> XII</option>
                                    </select>
                                </FormGroup>
                                <FormGroup>
                                    <Input
                                        placeholder="Please Enter State"
                                        type="text"
                                        name="Pstate"
                                        id="Pstate"
                                        onChange={handleChange}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Input
                                        placeholder="Please Enter City"
                                        type="text"
                                        name="Pdist"
                                        id="Pdist"
                                        onChange={handleChange}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Input
                                        placeholder="Please Enter Permanent Address"
                                        type="text"
                                        name="Paddress"
                                        id="Paddress"
                                        onChange={handleChange}
                                    />
                                </FormGroup>
                                <div className="text-center">
                                    <Button 
                                        color="primary" 
                                        type="submit"
                                    >
                                        Register
                                    </Button>
                                </div>
                            </Form>
                        </CardBody> 
                    </Card>
                </div>
            </Modal>
        </>
    );
}

export default DemoNavbar;