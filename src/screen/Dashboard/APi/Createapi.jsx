import React from 'react'
import Layout from '../../../component/main/Layout'

const Createapi = () => {
    return (
        <Layout>
            <div className='card mt-5 w-75 d-flex mx-auto'>
                <form>
                    <div class="row  box8 px-4 p-3">
                        <h2 class="text-center text-info">Register</h2>
                        <div class="col-sm-6 form-group mb-4">
                            <label for="name-f">First Name</label>
                            <input type="text" class="form-control" name="fname" id="name-f" placeholder="Enter your first name." required />
                        </div>
                        <div class="col-sm-6 form-group mb-4">
                            <label for="name-l">Last name</label>
                            <input type="text" class="form-control" name="lname" id="name-l" placeholder="Enter your last name." required />
                        </div>
                        <div class="col-sm-6 form-group mb-4">
                            <label for="email">Email</label>
                            <input type="email" class="form-control" name="email" id="email" placeholder="Enter your email." required />
                        </div>
                        <div class="col-sm-6 form-group mb-4">
                            <label for="address-2">Address</label>
                            <input type="address" class="form-control" name="address" id="address-2" placeholder="Village/City Name." required />
                        </div>
                        <div class="col-sm-6 form-group mb-4">
                            <label for="phone">phone</label>
                            <input type="text" class="form-control" name="phone" id="address-2" placeholder="Contact number." required />
                        </div>
                        <div class="col-sm-6 form-group mb-4">
                            <label for="sex">Gender</label>
                            <select id="sex" name="gender" class="form-control browser-default custom-select">
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="unspesified">Unspecified</option>
                            </select>
                        </div>
                        <div class="col-sm-6 form-group mb-4">
                            <label for="pass">Password</label>
                            <input type="Password" name="password" class="form-control" id="pass" placeholder="Enter your password." required />
                        </div>
                        <div class="col-sm-6 form-group mb-4">
                            <label for="pass2">Confirm Password</label>
                            <input type="Password" name="cnf-password" class="form-control" id="pass2" placeholder="Re-enter your password." required />
                        </div>
                        <div class="col-sm-6 ">
                            <input type="checkbox" name="checkbox" class="form-check d-inline" id="chb" required /><label for="chb" class="form-check-label">&nbsp;I accept all terms and conditions.
                            </label>
                        </div>

                        <div class="col-sm-12 form-group mb-0 mt-3">
                            <button class="btn btn-primary float-right" type="submit" name="register">Submit</button>

                        </div>

                    </div>
                </form>
            </div>
        </Layout>


    )
}

export default Createapi