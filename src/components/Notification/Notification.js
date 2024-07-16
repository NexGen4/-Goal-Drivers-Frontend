import React from 'react'
//import './Notification.css'

export default function Notification() {
  return (
    <div className='notification'>
        <h1>Notification</h1>
        <div class="square_box box_three"></div>
<div class="square_box box_four"></div>
  <div class="container mt-5">
    <div class="row">

      <div class="col-sm-12">
        <div class="alert fade alert-simple alert-success alert-dismissible text-left font__family-montserrat font__size-16 font__weight-light brk-library-rendered rendered show">
          <button type="button" class="close font__size-18" data-dismiss="alert">
									<span aria-hidden="true"><a>
                    <i class="fa fa-times greencross"></i>
                    </a></span>
									<span class="sr-only">Close</span> 
								</button>
          <i class="start-icon far fa-check-circle faa-tada animated"></i>
          <strong class="font__weight-semibold">success</strong> You successfully add the product 
        </div>
      </div>

      <div class="col-sm-12">
        <div class="alert fade alert-simple alert-info alert-dismissible text-left font__family-montserrat font__size-16 font__weight-light brk-library-rendered rendered show" role="alert" data-brk-library="component__alert">
          <button type="button" class="close font__size-18" data-dismiss="alert">
									<span aria-hidden="true">
										<i class="fa fa-times blue-cross"></i>
									</span>
									<span class="sr-only">Close</span>
								</button>
          <i class="start-icon  fa fa-info-circle faa-shake animated"></i>
          <strong class="font__weight-semibold">Updated</strong> You successfully updated.
        </div>

      </div>

      <div class="col-sm-12">
        <div class="alert fade alert-simple alert-warning alert-dismissible text-left font__family-montserrat font__size-16 font__weight-light brk-library-rendered rendered show" role="alert" data-brk-library="component__alert">
          <button type="button" class="close font__size-18" data-dismiss="alert">
									<span aria-hidden="true">
										<i class="fa fa-times warning"></i>
									</span>
									<span class="sr-only">Close</span>
								</button>
          <i class="start-icon fa fa-exclamation-triangle faa-flash animated"></i>
          <strong class="font__weight-semibold">Deleted</strong> You successfully deleted the product.
        </div>
      </div>

      <div class="col-sm-12">
        <div class="alert fade alert-simple alert-danger alert-dismissible text-left font__family-montserrat font__size-16 font__weight-light brk-library-rendered rendered show" role="alert" data-brk-library="component__alert">
          <button type="button" class="close font__size-18" data-dismiss="alert">
									<span aria-hidden="true">
										<i class="fa fa-times danger "></i>
									</span>
									<span class="sr-only">Close</span>
								</button>
          <i class="start-icon far fa-times-circle faa-pulse animated"></i>
          <strong class="font__weight-semibold"></strong> Change a few things up and try submitting again.
        </div>
      </div>

      <div class="col-sm-12">
        <div class="alert fade alert-simple alert-primary alert-dismissible text-left font__family-montserrat font__size-16 font__weight-light brk-library-rendered rendered show" role="alert" data-brk-library="component__alert">
          <button type="button" class="close font__size-18" data-dismiss="alert">
									<span  aria-hidden="true"><i class="fa fa-times alertprimary"></i></span>
									<span class="sr-only">Close</span>
								</button>
          <i class="start-icon fa fa-thumbs-up faa-bounce animated"></i>
          <strong class="font__weight-semibold">Well done!</strong> You successfullyread this important.
        </div>

      </div>

    </div>
  </div>
    </div>
  )
}
