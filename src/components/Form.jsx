import React from "react"
import { useFormContext } from "./FormContext";
import { useNavigate } from "react-router-dom";
export default function Form() {
    const { updateFormData } = useFormContext();
    const navigate = useNavigate();
    const [form, setForm] = React.useState({
        first: "",
        last: "",
        add1: "",
        add2: "",
        add3: "",
        postal: "",
        local: "",
        state: "",
        country: "",
        email: "",
        number: "",
        pan: ""
    })
    console.log(form)
    function handlefunc(event) {
        setForm(prev => {
            return {
                ...prev,
                [event.target.name]: event.target.value
            }
        }
        )
    }

    function handleData(event) {
        event.preventDefault()
        console.log(form)
        updateFormData(form);
        navigate('/shipping');
    }
    return (
        <>
            <form onSubmit={handleData} className="w-1/2">
                <h3 className="mt-12">Enter your name and address:</h3>
                <div className="mb-4">
                    <label htmlFor="first" className="form-label relative"></label><br />
                    <input type="text"
                        onChange={handlefunc} name="first"
                        value={form.first} className="px-5 form-input border border-gray-600 h-10 w-96 rounded-md" //for controlled components               
                    />
                    <span className="text-lg absolute left-36 pt-1 transition duration-200 input-text text-gray-300">First Name</span>
                </div>
                <div className="mb-4">
                    <label htmlFor="last" className="form-label relative"></label><br />
                    <input type="text"
                        onChange={handlefunc} name="last"
                        value={form.last} className="px-5 form-input border border-gray-600 h-10 w-96 rounded-md"
                    />
                    <span className="text-lg absolute left-36 pt-1 transition duration-200 input-text text-gray-300">Last Name</span>

                </div>
                <div className="mb-4">
                    <label htmlFor="add1" className="form-label relative"></label><br />
                    <input type="text"
                        onChange={handlefunc} name="add1"
                        value={form.add1} className="px-5 form-input border border-gray-600 h-10 w-96 rounded-md" />
                    <span className="text-lg absolute left-36 pt-1 transition duration-200 input-text text-gray-300">Address Line 1</span>

                    <h6 className="text-xs">We do not ship to P.O. boxes</h6>
                </div>
                <div className="mb-4">
                    <label htmlFor="add2" className="form-label relative"></label><br />
                    <input type="text"
                        onChange={handlefunc} name="add2" className="px-5 form-input border border-gray-600 h-10 w-96 rounded-md"
                        value={form.add2} />
                    <span className="text-lg absolute left-36 pt-1 transition duration-200 input-text text-gray-300">Address Line 2</span>

                </div>
                <div className="mb-4">
                    <label htmlFor="add3" className="form-label relative"></label><br />
                    <input type="text"
                        onChange={handlefunc} name="add3"
                        value={form.add3} className="px-5 form-input border border-gray-600 h-10 w-96 rounded-md"
                    />
                    <span className="text-lg absolute left-36 pt-1 transition duration-200 input-text text-gray-300">Address Line 3</span>

                </div>
                <div className="mb-4 flex space-x-4">
                    <div>
                        <label htmlFor="postal" className="form-label relative"></label><br />
                        <input
                            type="number"
                            onChange={handlefunc}
                            name="postal"
                            value={form.postal}
                            className="px-5 form-input border border-gray-600 h-10 rounded-md" />
                        <span className="text-lg absolute left-36 pt-1 transition duration-200 input-text text-gray-300">Postal Code</span>

                    </div>
                    <div className="relative">
                        <label htmlFor="local" className="form-label relative"></label><br />
                        <input
                            type="text"
                            onChange={handlefunc}
                            name="local"
                            value={form.local}
                            className="px-5 form-input border border-gray-600 h-10 rounded-md" />
                        <span className="text-lg absolute left-2 top-7 transition duration-200 text-gray-300">Locality</span>
                    </div>

                </div>
                <div className="mb-4 flex space-x-4">
                    <div>
                        <label htmlFor="local" className="form-label relative"></label><br />
                        <input
                            type="text"
                            onChange={handlefunc}
                            name="state"
                            value={form.state}
                            className="px-5 form-input border border-gray-600 h-10 rounded-md" />
                        <span className="text-lg absolute left-36 pt-1 transition duration-200 input-text text-gray-300">State/Territory</span>

                    </div>
                    <div className="relative">
                        <label htmlFor="country" className="form-label relative"></label><br />
                        <input
                            type="text"
                            onChange={handlefunc}
                            name="country"
                            value={form.country}
                            className="px-5 form-input border border-gray-600 h-10 rounded-md relative" />
                        <span className="text-lg absolute left-2 top-11 transform -translate-y-1/2 transition duration-200 text-gray-300">Country</span>
                    </div>

                </div><br />
                <div className="mb-4">
                    <h3>What's your contact information?</h3>
                    <label htmlFor="email" className="form-label relative"></label><br />
                    <input type="email"
                        onChange={handlefunc} name="email"
                        value={form.email} className="px-5 form-input border border-gray-600 h-10 w-96 rounded-md "
                    />
                    <span className="text-lg absolute left-36 pt-1 transition duration-200 input-text text-gray-300">Email</span>

                    <h6 className="text-xs">A confirmation mail will be sent after checkout.</h6>
                </div>
                <div className="mb-4">
                    <label htmlFor="number" className="form-label relative"></label><br />
                    <input type="number"
                        onChange={handlefunc} name="number"
                        value={form.number} className="px-5 form-input border border-gray-600 h-10 w-96 rounded-md"
                    />
                    <span className="text-lg absolute left-36 pt-1 transition duration-200 input-text text-gray-300">Phone Number</span>

                    <h6 className="text-xs">A carrier might contact you to confirm delivery.</h6>
                </div>
                <div className="mb-4">
                    <h3>What's your PAN?</h3>
                    <label htmlFor="pan" className="form-label relative"></label><br />
                    <input type="text"
                        onChange={handlefunc} name="pan"
                        value={form.pan} className="px-5 form-input border border-gray-600 h-10 w-96 rounded-md"
                    />
                    <span className="text-lg absolute left-36 pt-1 transition duration-200 input-text text-gray-300">PAN</span>

                    <h6 className="text-xs">Enter your PAN to enable payment with UPI,Net Banking or local card methods.</h6>
                </div><br />
                <div className="mb-4 flex items-center">
                    <input
                        type="checkbox"
                        checked={form.value}
                        name="isForm"
                        onChange={handlefunc}
                        className="mr-2"
                    />
                    <span>
                        <h6 className="text-xs">
                            I have read and consent to eShopWorld processing my info in accordance with the
                            <a href="#" className="text-blue-500">Privacy Statement</a> and
                            <a href="#" className="text-blue-500">Cookie Policy</a>.
                            "eShopWorld is a trusted Nike partner".
                        </h6>
                    </span>
                </div><br />
                <button className="mt-4 bg-black text-white py-2 px-4 rounded-full w-96">Continue</button>
            </form>
            <br /><br /><hr />
        </>
    )
}