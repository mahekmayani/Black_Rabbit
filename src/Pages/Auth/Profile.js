import React from "react";
import '../Auth/Css/Profile.css'
import Footer from "./Footer";


const Profile = () => {
	return (
		<>
			<div class="container" style={{ maxWidth: "70%" }}>
				<div class="Profile-main-body">
					<div class="row">
						<div class="col-lg-4">
							<div class="card">
								<div class="card-body">
									<div class="d-flex flex-column align-items-center text-center" >
										<img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="Admin" class="rounded-circle p-1 bg-info" width="20%" />
										<div class="mt-1">
											<h4>MHK</h4>
											<p class="text-secondary mb-1"></p>
											<p class="text-muted font-size-sm"></p>
											<p className="button" style={{ verticalAlign: "middle", marginTop: "%", marginBottom: "20%" }}><span className="Upload-btn">Upload</span></p>

										</div>
									</div>
									<ul class="list-group list-group-flush">
										<li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
											<h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-globe me-2 icon-inline"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>Website</h6>
											<span class="text-secondary">https://bootdey.com</span>
										</li>
										<li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
											<h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-globe me-2 icon-inline"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>Website</h6>
											<span class="text-secondary">https://bootdey.com</span>
										</li>



									</ul>
								</div>
							</div>
						</div>
						<div class="col-lg-8">
							<div class="card">
								<div className="Profile-body">

									<div class="card-body mt-2">
										<div class="row mb-3">
											<div class="col-sm-3">
												<h6 class="mt-1">First Name</h6>
											</div>
											<div class="col-sm-9 text-secondary">
												<input
													type="text"
													className="form-control"
													name='FirstName'
													placeholder='Enter first name'
												/>
											</div>
										</div>
										<div class="row mb-3">
											<div class="col-sm-3">
												<h6 class="mt-1">Last Name</h6>
											</div>
											<div class="col-sm-9 text-secondary">
												<input
													type="text"
													className="form-control"
													name='LastName'
													placeholder='Enter last name'
												/>
											</div>
										</div>
										<div class="row mb-3">
											<div class="col-sm-3">
												<h6 class="mb-0">Email</h6>
											</div>
											<div class="col-sm-9 text-secondary">
												<input
													type="email"
													className="form-control"
													name='Email'
													placeholder='Enter email'
												/>
											</div>
										</div>
										<div class="row mb-3">
											<div class="col-sm-3">
												<h6 class="mb-0">Email</h6>
											</div>
											<div class="col-sm-9 text-secondary">
												<input
													type="text"
													className="form-control"
													name='Password'
													placeholder='enter password'
												/>
											</div>
										</div>
										<div class="row mb-3">
											<div class="col-sm-3">
												<h6 class="mb-0">Mobile</h6>
											</div>
											<div class="col-sm-9 text-secondary">
												<input
													type="text"
													className="form-control"
													name='Mobile'
													placeholder='Enter mobile no.'
												/>
											</div>
										</div>
										<div class="row mb-3">
											<div class="col-sm-3">
												<h6 class="mb-0">BirthDate</h6>
											</div>
											<div class="col-sm-9 text-secondary">
												<input
													type="birthdate"
													className="form-control"
													name='BirthDate'
													placeholder='dd/mm/yyyy'
												/>
											</div>
										</div>
										<div className="form-group col-md-6 mt-4" >
											<h5 for="inputGender" style={{ display: "flex" }}>Gender : </h5>
											<input
												type="radio"
												name='Male'
												style={{ marginTop: "25px" }}
											/>Male
											<input
												type="radio"
												name='Female'
												style={{ marginLeft: "30px" }}
											/>Female
										</div>
										<div style={{ display: "flex" }}>
											<p className="button" style={{ verticalAlign: "middle", marginTop: "2%", marginBottom: "10%", marginLeft: "250px" }}><span className="Update-btn">Update</span></p>
											<p className="button" style={{ verticalAlign: "middle", marginTop: "2%", marginBottom: "10%" }}><span className="Cancel-btn">Cancel</span></p>
										</div>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-sm-12"> */
									{/* <div class="card">
								<div class="card-body">
									<h5 class="d-flex align-items-center mb-3">Project Status</h5>
									<p>Web Design</p>
									<div class="progress mb-3" style={{height: "5px"}}>
										<div class="progress-bar bg-primary" role="progressbar" style={{width:"80%", ariavaluenow:"80", ariavaluemin:"0" ,ariavaluemax:"100"}}></div>
									</div>
									<p>Website Markup</p>
									<div class="progress mb-3" style={{height: "5px"}}>
										<div class="progress-bar bg-danger" role="progressbar" style={{width:"72%", ariavaluenow:"72" ,ariavaluemin:"0" ,ariavaluemax:"100"}}></div>
									</div>
									<p>One Page</p>
									<div class="progress mb-3" style={{height: "5px"}}>
										<div class="progress-bar bg-success" role="progressbar" style={{width:"89%" , ariavaluenow:"89" , ariavaluemin:"0", ariavaluemax:"100"}}></div>
									</div>
									<p>Mobile Template</p>
									<div class="progress mb-3" style={{height: "5px"}}>
										<div class="progress-bar bg-warning" role="progressbar" style={{width:"55%", ariavaluenow:"55", ariavaluemin:"0", ariavaluemax:"100"}}></div>
									</div>
									<p>Backend API</p>
									<div class="progress" style={{height: "5px"}}>
										<div class="progress-bar bg-info" role="progressbar" style={{width:"66%" ,ariavaluenow:"66" ,ariavaluemin:"0" ,ariavaluemax:"100"}}></div>
									</div>
								</div>
							</div> */}

								</div>
							</div>
						</div>
					</div>
				</div>
			</div>


		</>
	)
}

export default Profile;