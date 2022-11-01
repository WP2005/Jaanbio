function markup_Home(){
    return `
    
    <header class="py-5 jaan-headerBG">
    <div class="container pyx-5 jaan-bgFilter">
        <div class="row gx-5 justify-content-center">
            <div class="col-lg-6">
                <div class="text-center my-5">
                    <h1 class="display-5 fw-bolder text-white mb-2" id="wpApi_headerTitle"></h1>
                    <p class="lead text-white mb-4" id="wpApi_headerContent"></p>
                    </div><br><br><br><br>

                </div>
            </div>
        </div>
    </div>
</header>

<!-- Features section-->
<section class="py-5 border-bottom" id="features">
    <div class="container px-5 my-5" id="wpApi-Intro"></div>

    
    <div class="container px-5 my-5">

        <div class="row gx-5 justify-content-center">
            <!-- Panel 1 - Objectives Panel-->
            <div class="col-lg-6 col-xl-4">
                <div class="card mb-5 mb-xl-0">
                    <div class="card-body p-5">
                        <div class="mb-3">
                            <span class="display-6" id="wpApi-panel1-title"><i class="bi bi-list-task" style="font-size: 2rem; color: rgb(184, 17, 31);"></i> </span>
                            <span class="text-muted"><hr></span>
                        </div>
                        <div id="wpApi-panel1-excerpt"></div>
                        <div class="d-grid"><a class="btn btn-outline-primary" href="#!">Learn more...</a></div>
                    </div>
                </div>
            </div>
            <!-- Panel 2 - Our Team-->
            <div class="col-lg-6 col-xl-4">
                <div class="card mb-5 mb-xl-0">
                    <div class="card-body p-5">
                        <div class="mb-3">
                            <span class="display-6" id="wpApi-panel2-title"><i class="bi bi-people-fill" style="font-size: 2rem; color: rgb(184, 17, 31);"></i> </span>
                            <span class="text-muted"><hr></span>
                        </div>
                        <div id="wpApi-panel2-excerpt"></div>
                        <div class="d-grid"><a class="btn btn-outline-primary" href="#!">Learn more...</a></div>
                    </div>
                </div>
            </div>
            <!-- Panel 3-->
            <div class="col-lg-6 col-xl-4">
                <div class="card mb-5 mb-xl-0">
                    <div class="card-body p-5">
                        <div class="mb-3">
                            <span class="display-6" id="wpApi-panel3-title"><i class="bi bi-newspaper" style="font-size: 2rem; color: rgb(184, 17, 31);"></i> </span>
                            <span class="text-muted"><hr></span>
                        </div>
                        <div id="wpApi-panel3-excerpt"></div>
                        <div class="d-grid"><a class="btn btn-outline-primary" href="#!">Learn more...</a></div>
                    </div>
                </div>
            </div>


        </div>
    </div>
</section>
    
    
    
 `
}


export {markup_Home}