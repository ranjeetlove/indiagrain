webpackJsonp([17],{

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FollowUpDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_followup_followup__ = __webpack_require__(84);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the FollowUpDetailsPage page.
 */
var FollowUpDetailsPage = /** @class */ (function () {
    function FollowUpDetailsPage(navCtrl, navParams, followupProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.followupProvider = followupProvider;
        this.followupdetailsitems = [0];
        this.id = navParams.get('id');
        var id = { "id": this.id };
        this.myid = id;
        this.detailsData();
    }
    FollowUpDetailsPage.prototype.ionViewDidLoad = function () {
        // console.log(FollowUpDetailsPage); 
    };
    FollowUpDetailsPage.prototype.detailsData = function () {
        var _this = this;
        this.followupProvider.detailsData(this.myid, "followup_list").then(function (Result) {
            //this.followupDetails = Result; 
            _this.followupdetailsitems = _this.followupProvider.followupmodel[0];
            //console.log(this.followupdetailsitems);
        }, function (err) {
        });
    };
    FollowUpDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-follow-up-details',template:/*ion-inline-start:"C:\Users\pc\myApp\src\pages\follow-up-details\follow-up-details.html"*/'<!--\n  Generated template for the followupdetailsitemPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header >\n\n  <ion-navbar color="blue">\n    <ion-title>Follow Up Details</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n    <ion-card>\n          <ion-card-content>\n			<ion-list>\n				<ion-item text-wrap class="item"> \n					<div class="firstname">\n					 Firm Name \n				 </div>	\n				 <div class="details">\n				  {{ followupdetailsitems.firmname }}\n				 </div>\n				</ion-item>\n			</ion-list>	\n          	     <ion-list>\n          	    	<ion-item text-wrap>\n          	    		<div class="firstname">\n          		 		Contact Person \n          		 	</div>	\n          		 	<div class="details">\n						{{ followupdetailsitems.contactperson }}\n          		 	</div>\n          	    	</ion-item>\n          	    </ion-list>	\n          	     <ion-list>\n          	    	<ion-item text-wrap>\n          	    		<div class="firstname">\n          		 		Address \n          		 	</div>	\n          		 	<div class="details">\n						{{ followupdetailsitems.address }}\n          		 	</div>\n          	    	</ion-item>\n          	    </ion-list>\n          	    <ion-list>\n          	    	<ion-item text-wrap>\n          	    		<div class="firstname">\n          		 		District \n          		 	</div>	\n          		 	<div class="details">\n						{{ followupdetailsitems.district }}\n          		 	</div>\n          	    	</ion-item>\n          	    </ion-list>\n          	    <ion-list>\n          	    	<ion-item text-wrap>\n          	    		<div class="firstname">\n          		 		Pincode \n          		 	</div>	\n          		 	<div class="details">\n						{{ followupdetailsitems.pincode }}\n          		 	</div>\n          	    	</ion-item>\n          	    </ion-list>\n          	    <ion-list>\n          	    	<ion-item text-wrap>\n          	    		<div class="firstname">\n          		 		Country \n          		 	</div>	\n          		 	<div class="details">\n						{{ followupdetailsitems.country }}\n          		 	</div>\n          	    	</ion-item>\n          	    </ion-list>\n          	    <ion-list>\n          	    	<ion-item text-wrap>\n          	    		<div class="firstname">\n          		 		Enquiry Date \n          		 	</div>	\n          		 	<div class="details">\n						{{ followupdetailsitems.enquirydate }}\n          		 	</div>\n          	    	</ion-item>\n          	    </ion-list>\n          	    <ion-list>\n          	    	<ion-item text-wrap>\n          	    		<div class="firstname">\n          		 		Client Stage \n          		 	</div>	\n          		 	<div class="details">\n						{{ followupdetailsitems.ClientStage }}\n          		 	</div>\n          	    	</ion-item>\n          	    </ion-list>\n          	    <ion-list>\n          	    	<ion-item text-wrap>\n          	    		<div class="firstname">\n          		 		Mobile 1 \n          		 	</div>	\n          		 	<div class="details">\n						{{ followupdetailsitems.MobExt1 }}\n          		 	</div>\n          	    	</ion-item>\n          	    </ion-list>\n          	    <ion-list>\n          	    	<ion-item text-wrap>\n          	    		<div class="firstname">\n          		 		Mobile 2 \n          		 	</div>	\n          		 	<div class="details">\n						{{ followupdetailsitems.MobExt2 }}\n          		 	</div>\n          	    	</ion-item>\n          	    </ion-list>\n          	    <ion-list>\n          	    	<ion-item text-wrap>\n          	    		<div class="firstname">\n          		 		Mobile 3 \n          		 	</div>	\n          		 	<div class="details">\n						{{ followupdetailsitems.MobExt3 }}\n          		 	</div>\n          	    	</ion-item>\n          	    </ion-list>\n          	    <ion-list>\n          	    	<ion-item text-wrap>\n          	    		<div class="firstname">\n          		 		Mobile 4 \n          		 	</div>	\n          		 	<div class="details">\n						{{ followupdetailsitems.MobExt4 }}\n          		 	</div>\n          	    	</ion-item>\n          	    </ion-list>	\n          	    <ion-list>\n          	    	<ion-item text-wrap>\n          	    		<div class="firstname">\n          		 		Telefax \n          		 	</div>	\n          		 	<div class="details">\n						{{ followupdetailsitems.contactperson }}\n          		 	</div>\n          	    	</ion-item>\n          	    </ion-list>\n          	    <ion-list>\n          	    	<ion-item text-wrap>\n          	    		<div class="firstname">\n          		 		EMAIL \n          		 	</div>	\n          		 	<div class="details">\n						{{ followupdetailsitems.email1 }}\n          		 	</div>\n          	    	</ion-item>\n          	    </ion-list>\n          	    <ion-list>\n          	    	<ion-item text-wrap>\n          	    		<div class="firstname">\n          		 		EMAIL 2 \n          		 	</div>	\n          		 	<div class="details">\n						{{ followupdetailsitems.email2 }}\n          		 	</div>\n          	    	</ion-item>\n				  </ion-list>\n				  <ion-list>\n					<ion-item text-wrap>\n						<div class="firstname">\n						 Website\n					 </div>	\n					 <div class="details">\n					  {{ followupdetailsitems.website }}\n					 </div>\n					</ion-item>\n				</ion-list> \n				<ion-list>\n					<ion-item text-wrap>\n						<div class="firstname">\n						 Industry Type\n					 </div>	\n					 <div class="details">\n					  {{ followupdetailsitems.website }}\n					 </div>\n					</ion-item>\n				</ion-list> \n				<ion-list>\n					<ion-item text-wrap>\n						<div class="firstname">\n						 Exe Remark\n					 </div>	\n					 <div class="details">\n					  {{ followupdetailsitems.website }}\n					 </div>\n					</ion-item>\n				</ion-list> \n				<ion-list>\n					<ion-item text-wrap>\n						<div class="firstname">\n						 Remark\n					 </div>	\n					 <div class="details">\n					  {{ followupdetailsitems.remark }}\n					 </div>\n					</ion-item>\n				</ion-list> \n				<ion-list>\n					<ion-item text-wrap>\n						<div class="firstname">\n						 follow Up By\n					 </div>	\n					 <div class="details">\n					  {{ followupdetailsitems.followby }}\n					 </div>\n					</ion-item>\n				</ion-list> \n				<ion-list>\n					<ion-item text-wrap>\n						<div class="firstname">\n						 Follow up media\n					 </div>	\n					 <div class="details">\n					  {{ followupdetailsitems.followmedia }}\n					 </div>\n					</ion-item>\n				</ion-list> \n				<ion-list>\n					<ion-item text-wrap>\n						<div class="firstname">\n						 Next follow up date \n					 </div>	\n					 <div class="details">\n					  {{ followupdetailsitems.followdate }}\n					 </div>\n					</ion-item>\n				</ion-list> \n				  \n                    	\n         </ion-card-content>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\pc\myApp\src\pages\follow-up-details\follow-up-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_followup_followup__["a" /* FollowupProvider */]])
    ], FollowUpDetailsPage);
    return FollowUpDetailsPage;
}());

//# sourceMappingURL=follow-up-details.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClintPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quotation_details_quotation_details__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ClintPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ClintPage = /** @class */ (function () {
    function ClintPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ClintPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ClintPage');
    };
    ClintPage.prototype.quotationdetails = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__quotation_details_quotation_details__["a" /* QuotationDetailsPage */]);
    };
    ClintPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-clint',template:/*ion-inline-start:"C:\Users\pc\myApp\src\pages\clint\clint.html"*/'<ion-header>\n  <ion-navbar color="blue">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Client Enquriy</ion-title>\n  </ion-navbar>\n</ion-header>\n<!-- Segment in a header -->\n \n\n<ion-content>\n   <div>\n     <ion-segment [(ngModel)]="client" >\n        <ion-segment-button segment-activated value="clientinfo">\n          client Info\n        </ion-segment-button> \n        <ion-segment-button value="enquriy">\n          enquriy\n        </ion-segment-button> \n        <ion-segment-button value="followUp">\n          Follow Up\n        </ion-segment-button> \n        <ion-segment-button value="history">\n          History\n        </ion-segment-button> \n     </ion-segment> \n   </div>\n   <div [ngSwitch]="client" padding>\n      <div *ngSwitchCase="\'clientinfo\'">\n        <form>\n            <ion-list>\n              <ion-item class="bottom-border">\n                <ion-label stacked>Client Industry</ion-label>\n                <ion-select class="width100"  multiple="true"  okText="OK" cancelText="cancel">\n                   <ion-option value="bacon" selected="true">Apple Computers</ion-option>\n                   <ion-option value="olives">Black Olives</ion-option>\n                   <ion-option value="xcheese">Extra Cheese</ion-option>\n                </ion-select>\n              </ion-item>\n              <ion-item class="bottom-border">\n                <ion-label>Enquiry Date</ion-label>\n                  <ion-datetime displayFormat="h:mm A" pickerFormat="h mm A"></ion-datetime>\n              </ion-item> \n              <ion-item class="bottom-border">\n                  <ion-label stacked>Source of Enquiry</ion-label>\n                  <ion-input type="text" placeholder="#"></ion-input>\n               </ion-item>\n               <ion-item class="bottom-border">\n                <ion-label stacked>Types of Enquiry</ion-label>\n                <ion-select class="width100"  multiple="true"  okText="OK" cancelText="cancel">\n                   <ion-option value="bacon" selected="true">Select</ion-option>\n                   <ion-option value="olives">Black Olives</ion-option>\n                   <ion-option value="xcheese">Extra Cheese</ion-option>\n                </ion-select>\n              </ion-item>\n               <ion-item class="bottom-border">\n                <ion-label stacked>% of getting order</ion-label>\n                <ion-select class="width100"  multiple="true"  okText="OK" cancelText="cancel">\n                   <ion-option value="bacon" selected="true">Select</ion-option>\n                   <ion-option value="olives">Black Olives</ion-option>\n                   <ion-option value="xcheese">Extra Cheese</ion-option>\n                </ion-select>\n              </ion-item>\n               <ion-item class="bottom-border">\n                  <ion-label stacked>Competitor Name/Price</ion-label>\n                  <ion-input type="text" placeholder="#"></ion-input>\n               </ion-item>\n         </ion-list>\n         <ion-grid>\n                 <ion-row>\n                  <ion-col col-4><button ion-button block outline (click)="quotationdetails()">Add Quotation</button></ion-col>\n                  <ion-col col-4><button ion-button block outline>Send Email</button></ion-col>\n                  <ion-col col-4><button ion-button block outline>Send Sms</button></ion-col>\n                  </ion-row>\n                </ion-grid>\n            <button ion-button  block>Submit</button>\n            <button ion-button  color="light" block>Go Back</button>\n        </form>\n      </div>\n      <!-- second tab-->\n      <!-- second tab-->\n      <!-- second tab-->\n       <div *ngSwitchCase="\'enquriy\'">\n          <ion-list>\n            <ion-item>\n              <ion-label stacked>Enquiry Type</ion-label>\n               <ion-select>\n                 <ion-option value="nes" selected="true">Cp Compressors</ion-option>\n                 <ion-option value="n64">Hindi</ion-option>\n               </ion-select>\n            </ion-item> \n            <ion-item>\n              <ion-label stacked>Required Models</ion-label>\n               <ion-select>\n                 <ion-option value="nes" selected="true">Cp Catalogue</ion-option>\n                 <ion-option value="n64">Hindi</ion-option>\n               </ion-select>\n            </ion-item> \n            <ion-item>\n               <ion-label stacked>Username</ion-label>\n               <ion-input type="text" placeholder="4000"></ion-input>\n            </ion-item>\n           <ion-item>\n               <ion-label stacked>Password</ion-label>\n               <ion-input type="password" placeholder="3000"></ion-input>\n           </ion-item>\n         </ion-list>\n         <button ion-button block>ADD</button>\n       </div>\n       <!-- third tab-->\n       <!-- third tab-->\n       <!-- third tab-->\n       <div *ngSwitchCase="\'followUp\'">\n           <ion-list>\n            <ion-item>\n              <ion-label stacked>FollowUp By</ion-label>\n               <ion-select>\n                 <ion-option value="nes" selected="true">8 Selected</ion-option>\n                 <ion-option value="n64">Hindi</ion-option>\n               </ion-select>\n            </ion-item> \n            <ion-item>\n              <ion-label stacked>FollowUp Media</ion-label>\n               <ion-select>\n                 <ion-option value="nes" selected="true">Call</ion-option>\n                 <ion-option value="n64">Hindi</ion-option>\n               </ion-select>\n            </ion-item>\n            <ion-item>\n              <ion-label stacked>Types Of Enquiry</ion-label>\n               <ion-select>\n                 <ion-option value="nes" selected="true">3 selected</ion-option>\n                 <ion-option value="n64">Hindi</ion-option>\n               </ion-select>\n            </ion-item> \n            <ion-item>\n              <ion-label stacked>Client status</ion-label>\n               <ion-select>\n                 <ion-option value="nes" selected="true">Uku, WP50</ion-option>\n                 <ion-option value="n64">Hindi</ion-option>\n               </ion-select>\n            </ion-item>\n            <ion-item>\n              <ion-label stacked>Call status</ion-label>\n               <ion-select>\n                 <ion-option value="nes" selected="true">Success</ion-option>\n                 <ion-option value="n64">Hindi</ion-option>\n               </ion-select>\n            </ion-item>\n             <ion-item>\n              <ion-label stacked>SMS Duration</ion-label>\n               <ion-select>\n                 <ion-option value="nes" selected="true">Twice in week</ion-option>\n                 <ion-option value="n64">Hindi</ion-option>\n               </ion-select>\n            </ion-item>\n            <ion-item>\n              <ion-label stacked>SMS remark</ion-label>\n              <ion-input type="text" placeholder="#"></ion-input>\n            </ion-item>\n             <ion-item>\n              <ion-label stacked>Exe remark</ion-label>\n              <ion-input type="text" placeholder="#"></ion-input>\n            </ion-item>\n         </ion-list>\n          <ion-grid>\n             <ion-row>\n               <ion-col col-6><button ion-button block outline>CANCEL</button></ion-col>\n               <ion-col col-6><button ion-button block>ADD</button></ion-col>\n            </ion-row>\n         </ion-grid>\n             <ion-row>\n                <ion-col col-12><button ion-button block outline>View Previous Follow Up <ion-icon name="arrow-forward"></ion-icon></button></ion-col>\n             </ion-row> \n       </div>\n\n       <!-- fourth tab-->\n       <!-- fourth tab-->\n       <!-- fourth tab-->\n\n       <div *ngSwitchCase="\'history\'">\n          <ion-item>\n             <h5>Apurva</h5>\n           </ion-item> \n       </div> \n   </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\pc\myApp\src\pages\clint\clint.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ClintPage);
    return ClintPage;
}());

//# sourceMappingURL=clint.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuotationDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the QuotationDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var QuotationDetailsPage = /** @class */ (function () {
    function QuotationDetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    QuotationDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad QuotationDetailsPage');
    };
    QuotationDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-quotation-details',template:/*ion-inline-start:"C:\Users\pc\myApp\src\pages\quotation-details\quotation-details.html"*/'<!--\n  Generated template for the QuotationDetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="blue">\n    <ion-title>Quotation Details</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <div>\n	<ion-segment [(ngModel)]="quotation" >\n        <ion-segment-button segment-activated value="quotationinfo">\n          Quotation Info\n        </ion-segment-button> \n        <ion-segment-button value="extraformation">\n          Extra Formation\n        </ion-segment-button> \n     </ion-segment>\n  </div>\n  <div [ngSwitch]="quotation" >\n      <div *ngSwitchCase="\'quotationinfo\'">\n      	<ion-list>\n      		<ion-item>\n      			<ion-label stacked>Quotation Number</ion-label>\n                <ion-input type="text" placeholder="IGS/16-17/2031"></ion-input>\n      		</ion-item>\n      		<ion-item>\n              <ion-label stacked>Product</ion-label>\n               <ion-select>\n                 <ion-option value="nes" selected="true">select</ion-option>\n                 <ion-option value="n64">unselect</ion-option>\n               </ion-select>\n          </ion-item>\n          <ion-item>\n              <ion-label stacked>Model</ion-label>\n               <ion-select>\n                 <ion-option value="nes" selected="true">Select model</ion-option>\n                 <ion-option value="n64">unselect</ion-option>\n               </ion-select>\n          </ion-item>\n          <ion-item>\n              <ion-label stacked>Qty</ion-label>\n               <ion-select>\n                 <ion-option value="nes" selected="true">1</ion-option>\n                 <ion-option value="n64">2</ion-option>\n               </ion-select>\n          </ion-item>\n          <ion-item>\n              <ion-label stacked>Catalogue</ion-label>\n              <ion-input type="text" placeholder="####"></ion-input>\n          </ion-item>\n          <ion-item>\n              <ion-label stacked>Rate</ion-label>\n              <ion-input type="text" placeholder="1000"></ion-input>\n          </ion-item>\n          <ion-item>\n              <ion-label stacked>Discount</ion-label>\n              <ion-input type="text" placeholder="20%"></ion-input>\n          </ion-item>\n          <ion-item>\n              <ion-label stacked>Amount</ion-label>\n              <ion-input type="text" placeholder="8000"></ion-input>\n          </ion-item> 	\n        </ion-list>\n        <ion-grid>\n             <ion-row>\n               <ion-col col-12><button ion-button block>ADD</button></ion-col>\n            </ion-row>\n         </ion-grid>\n       </div>\n\n       <!-- second tab -->\n       <!-- second tab -->\n       <!-- second tab -->\n       <!-- second tab -->\n\n      <div *ngSwitchCase="\'extraformation\'">\n                  	\n      	<ion-list>\n            \n            	<div class="extrabox">\n            	   <p>Payment Details</p>\n            	</div>\n            <ion-item>\n                <ion-input type="text" placeholder="payment Received"></ion-input>\n      		</ion-item>\n      		<ion-item>\n               <ion-select>\n                 <ion-option value="nes" selected="true">Payment Mode</ion-option>\n                 <ion-option value="n64">unselect</ion-option>\n               </ion-select>\n          </ion-item>\n          <div class="extrabox">\n            	   <p>Material Details</p>\n            	</div>\n          <ion-item>\n                <ion-input type="text" placeholder="Meterial"></ion-input>\n      	  </ion-item>\n          <div class="extrabox">\n            	   <p>Extra Details</p>\n            	</div>\n      	   <ion-item>\n                <ion-input type="text" placeholder="If any thing else"></ion-input>\n      	  </ion-item>\n     	\n        </ion-list>\n        <ion-grid>\n             <ion-row>\n               <ion-col col-12><button ion-button block>ADD</button></ion-col>\n            </ion-row>\n         </ion-grid>\n      	\n      </div>\n  </div>        \n\n</ion-content>\n'/*ion-inline-end:"C:\Users\pc\myApp\src\pages\quotation-details\quotation-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], QuotationDetailsPage);
    return QuotationDetailsPage;
}());

//# sourceMappingURL=quotation-details.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_image_picker__ = __webpack_require__(172);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the EditProfilePage page.
 */
var EditProfilePage = /** @class */ (function () {
    function EditProfilePage(navCtrl, navParams, imagePicker) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.imagePicker = imagePicker;
    }
    EditProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditProfilePage');
    };
    EditProfilePage.prototype.getPictures = function () {
        var _this = this;
        this.imagePicker.getPictures({}).then(function (results) {
            console.log(results);
            for (var i = 0; i < results.length; i++) {
                _this.images.push(results[i]);
            }
            ;
        });
    };
    EditProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-profile',template:/*ion-inline-start:"C:\Users\pc\myApp\src\pages\edit-profile\edit-profile.html"*/'<ion-header>\n  <ion-navbar color="blue">\n\n    <ion-grid>\n      <ion-row>\n<ion-col col-6>\n    <ion-title class="profile">Edit Profile</ion-title>\n</ion-col>\n<ion-col col-6>\n    <button ion-button class="edit" (click)="getPictures()">\n    	Save\n    </button>\n</ion-col>\n</ion-row>\n</ion-grid>\n    <ion-grid>\n      <ion-row>\n      	<div class="profile-box">\n         <div class="profile-pic" *ngFor="let image of images">\n    	   <img src="{{image}}"/>\n         </div>\n         <h3 class="profile-name">Ranjeet Singh</h3>\n     </div>\n     </ion-row>\n</ion-grid>\n      \n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-header>\n      PROFILE DETAILS\n    </ion-card-header>\n    <ion-grid>\n        <ion-row>\n      <ion-list>\n         <ion-item>\n          <ion-avatar item-start>\n            <img class="img-icon" src="assets/imgs/icons/default_user_id.png">\n          </ion-avatar>\n          <!-- <h2 class="allheading"></h2> -->   \n        </ion-item>\n        </ion-list>\n       </ion-row>\n       <ion-row>\n      <ion-list>\n         <ion-item>\n          <ion-avatar item-start>\n            <img class="img-icon" src="assets/imgs/icons/default_user_types.png">\n          </ion-avatar>\n          <h2 class="allheading"></h2>\n          <p>User Type</p>\n        </ion-item>\n        </ion-list>\n       </ion-row>\n       <ion-row>\n         <ion-col col-7>\n      <ion-list>\n         <ion-item>\n          <ion-avatar item-start>\n            <img class="img-icon" src="assets/imgs/icons/default_mobile.png">\n          </ion-avatar>\n          <h2 class="allheading"></h2>\n          <p>First Name</p>\n        </ion-item>\n        </ion-list>\n        </ion-col>\n        <ion-col col-5>\n      <ion-list>\n         <ion-item>\n          <h2 class="allheading"></h2>\n          <p>Last Name</p>\n        </ion-item>\n        </ion-list>\n        </ion-col>\n       </ion-row>\n        <ion-row>\n      <ion-list>\n         <ion-item>\n          <ion-avatar item-start>\n            <img class="img-icon" src="assets/imgs/icons/default_gender.png">\n          </ion-avatar>\n          <h2 class="allheading"></h2>\n          <p>Gender</p>\n        </ion-item>\n        </ion-list>\n       </ion-row>\n        <ion-row>\n      <ion-list>\n         <ion-item>\n          <ion-avatar item-start>\n            <img class="img-icon" src="assets/imgs/icons/default_dob.png">\n          </ion-avatar>\n          <h2></h2>\n          <p>Birthday</p>\n        </ion-item>\n        </ion-list>\n       </ion-row>\n        <ion-row>\n      <ion-list>\n         <ion-item>\n          <ion-avatar item-start>\n            <img class="img-icon" src="assets/imgs/icons/default_location.png">\n          </ion-avatar>\n          <h2></h2>\n          <p>Address</p>\n        </ion-item>\n        </ion-list>\n       </ion-row>\n        <ion-row>\n      <ion-list>\n         <ion-item>\n          <ion-avatar item-start>\n            <img class="img-icon" src="assets/imgs/icons/default_occupation.png">\n          </ion-avatar>\n          <h2 class="allheading"></h2>\n          <p>Occupation</p>\n        </ion-item>\n        </ion-list>\n       </ion-row>\n        <ion-row>\n      <ion-list>\n         <ion-item>\n          <ion-avatar item-start>\n            <img class="img-icon" src="assets/imgs/icons/default_location.png">\n          </ion-avatar>\n          <h2></h2>\n          <p>Mobile Number</p>\n        </ion-item>\n        </ion-list>\n       </ion-row>\n       <ion-row>\n      <ion-list>\n         <ion-item>\n          <ion-avatar item-start>\n            <img class="img-icon" src="assets/imgs/icons/default_email.png">\n          </ion-avatar>\n          <h2></h2>\n          <p>Email</p>\n        </ion-item>\n        </ion-list>\n       </ion-row>\n        <ion-row>\n      <ion-list>\n         <ion-item>\n          <ion-avatar item-start>\n            <img class="img-icon" src="assets/imgs/icons/default_info.png">\n          </ion-avatar>\n          <h2></h2>\n          <p>About</p>\n        </ion-item>\n        </ion-list>\n       </ion-row>\n     </ion-grid>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\pc\myApp\src\pages\edit-profile\edit-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_image_picker__["a" /* ImagePicker */]])
    ], EditProfilePage);
    return EditProfilePage;
}());

//# sourceMappingURL=edit-profile.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__otp_otp__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ForgotPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ForgotPasswordPage = /** @class */ (function () {
    function ForgotPasswordPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ForgotPasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ForgotPasswordPage');
    };
    ForgotPasswordPage.prototype.otppage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__otp_otp__["a" /* OtpPage */]);
    };
    ForgotPasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-forgot-password',template:/*ion-inline-start:"C:\Users\pc\myApp\src\pages\forgot-password\forgot-password.html"*/'<!--\n  Generated template for the ForgotPasswordPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="blue">\n    <ion-title>Forgot Password</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n   <p>Enter your number below to receive your password reset instruction.</p>\n <ion-grid>\n 	<ion-row>\n 		<h5>Mobile Number</h5>\n 	</ion-row>	\n  <ion-row>\n    <ion-col col-5>\n    	<ion-list>\n    		<ion-item>\n    			<ion-select class="width100"  multiple="false"  okText="OK" cancelText="cancel">\n                   <ion-option value="bacon" selected="true">+91</ion-option>\n                   <ion-option value="olives">+85</ion-option>\n                   <ion-option value="xcheese">+11</ion-option>\n      </ion-select>\n    		</ion-item>	\n    	</ion-list>	\n    </ion-col>\n    <ion-col col-7>\n    	<ion-list>\n    		<ion-item>\n    			<ion-input type="text" placeholder=""></ion-input>\n    		</ion-item>\n    	</ion-list>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n <button ion-button block (click)="otppage()">Send OTP</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\pc\myApp\src\pages\forgot-password\forgot-password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ForgotPasswordPage);
    return ForgotPasswordPage;
}());

//# sourceMappingURL=forgot-password.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reset_password_reset_password__ = __webpack_require__(112);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the OtpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OtpPage = /** @class */ (function () {
    function OtpPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    OtpPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OtpPage');
    };
    OtpPage.prototype.ressetPass = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__reset_password_reset_password__["a" /* ResetPasswordPage */]);
    };
    OtpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-otp',template:/*ion-inline-start:"C:\Users\pc\myApp\src\pages\otp\otp.html"*/'<!--\n  Generated template for the OtpPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="blue">\n    <ion-title>OTP</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n   <p>We have sent an OTP on your number</p>\n   <p>+91 258<span>-</span>xxxx<span>-</span>xxxx</p>\n    \n<ion-grid>\n  <ion-row>\n    <ion-col col-2 offset-2><ion-input class="input-border" type="text"></ion-input></ion-col>\n    <ion-col col-2><ion-input class="input-border" type="text"></ion-input></ion-col>\n    <ion-col col-2><ion-input class="input-border" type="text"></ion-input></ion-col>\n    <ion-col col-2><ion-input class="input-border" type="text"></ion-input></ion-col>\n  </ion-row>\n</ion-grid>\n    <p>Didn\'t get the OTP?<span><a href="#"> Resend OTP</a></span></p>\n   <button ion-button block (click)="ressetPass()">Done</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\pc\myApp\src\pages\otp\otp.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], OtpPage);
    return OtpPage;
}());

//# sourceMappingURL=otp.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ResetPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ResetPasswordPage = /** @class */ (function () {
    function ResetPasswordPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ResetPasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ResetPasswordPage');
    };
    ResetPasswordPage.prototype.loginPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    ResetPasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-reset-password',template:/*ion-inline-start:"C:\Users\pc\myApp\src\pages\reset-password\reset-password.html"*/'<!--\n  Generated template for the ResetPasswordPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="blue">\n    <ion-title>Reset Password</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n   <p>Please enter and confirm your new password to access your account</p>\n   <ion-list>\n\n  <ion-item>\n    <ion-label floating>Enter Password</ion-label>\n    <ion-input type="text"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Confirm Password</ion-label>\n    <ion-input type="password"></ion-input>\n  </ion-item>\n\n</ion-list>\n   <button ion-button block (click)="loginPage()">Done</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\pc\myApp\src\pages\reset-password\reset-password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ResetPasswordPage);
    return ResetPasswordPage;
}());

//# sourceMappingURL=reset-password.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__today_follow_up_today_follow_up__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_service_auth_service__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignUpPage = /** @class */ (function () {
    function SignUpPage(formBuilder, navCtrl, navParams, authServiceProvider, alertCtrl) {
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authServiceProvider = authServiceProvider;
        this.alertCtrl = alertCtrl;
        this.submitted = false;
        this.userData = { "fname": "", "lname": "", "email": "", "userid": "", "pwd": "", "usertype": "" };
        this.signupform = formBuilder.group({
            fname: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            lname: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            usertype: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            userid: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
        this.fname = this.signupform.controls['fname'];
        this.lname = this.signupform.controls['lname'];
        this.password = this.signupform.controls['password'];
        this.email = this.signupform.controls['email'];
        this.usertype = this.signupform.controls['usertype'];
        this.userid = this.signupform.controls['userid'];
    }
    SignUpPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignUpPage');
    };
    SignUpPage.prototype.homePage = function () {
        var _this = this;
        this.submitted = true;
        if (this.signupform.valid) {
            //console.log(this.signupform.value);
            this.authServiceProvider.postData(this.userData, "user_sign_up").then(function (result) {
                _this.responseData = result;
                //console.log(this.responseData);
                // localStorage.setItem('userData', JSON.stringify(this.responseData) );
                var uservalue = JSON.parse(result).status;
                if (uservalue == true) {
                    // alert("SignUp Successfully");
                    var alert_1 = _this.alertCtrl.create({
                        title: '',
                        subTitle: 'SignUp Successfully',
                        buttons: ['OK']
                    });
                    alert_1.present();
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__today_follow_up_today_follow_up__["a" /* TodayFollowUpPage */]);
                }
                else {
                    var alert_2 = _this.alertCtrl.create({
                        title: '',
                        subTitle: 'User is already exist',
                        buttons: ['OK']
                    });
                    alert_2.present();
                }
            }, function (err) {
            });
        }
        // this.navCtrl.setRoot(TodayFollowUpPage);
    };
    SignUpPage.prototype.loginPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
    };
    SignUpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sign-up',template:/*ion-inline-start:"C:\Users\pc\myApp\src\pages\sign-up\sign-up.html"*/'<ion-header>\n\n   <ion-navbar color="blue">\n\n    <ion-title>Sign Up</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n\n\n    <div class="logo">\n\n        <img src="/assets/imgs/logo/login_logo.png">\n\n    </div>\n\n    <form [formGroup]="signupform" (ngSubmit)="homePage()">  \n\n	<!-- <div class="profile-upload">\n\n		<div class="profile-area">\n\n			<img src="assets/imgs/profile.jpg">\n\n		</div>	\n\n    </div> -->\n\n    <div>\n\n    	<ion-list>\n\n        <ion-item>\n\n            <ion-label floating>First Name</ion-label>\n\n            <ion-input type="text" formControlName="fname" [(ngModel)]="userData.fname"></ion-input>\n\n        </ion-item>\n\n        <p *ngIf="fname.hasError(\'required\') && fname.touched">\n\n            <span class="red">Pls Enter your first name</span>\n\n        </p>\n\n        <ion-item>\n\n          <ion-label floating>Last Name</ion-label>\n\n          <ion-input type="text" formControlName="lname" [(ngModel)]="userData.lname"></ion-input>\n\n      </ion-item>\n\n      <p *ngIf="lname.hasError(\'required\') && lname.touched">\n\n          <span class="red">Pls Enter your last name</span>\n\n      </p>\n\n       <ion-item>\n\n          <ion-label floating>email</ion-label>\n\n          <ion-input type="text" formControlName="email" [(ngModel)]="userData.email"></ion-input>\n\n          <p *ngIf="email.hasError(\'required\') && email.touched">\n\n            <span class="red">enter your email</span>\n\n        </p>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label floating>User ID</ion-label>\n\n          <ion-input type="text" formControlName="userid" [(ngModel)]="userData.userid"></ion-input>\n\n          <p *ngIf="userid.hasError(\'required\') && userid.touched">\n\n            <span class="red">User ID</span>\n\n        </p>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label floating>User Type</ion-label>\n\n          <ion-input type="text" formControlName="usertype" [(ngModel)]="userData.usertype"></ion-input>\n\n          <p *ngIf="usertype.hasError(\'required\') && usertype.touched">\n\n            <span class="red">usertype</span>\n\n        </p>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label floating>Password</ion-label>\n\n          <ion-input type="password" formControlName="password" [(ngModel)]="userData.pwd"></ion-input>\n\n      </ion-item>\n\n      <p *ngIf="password.hasError(\'required\') && password.touched">\n\n          <span class="red">Pls create your password</span>\n\n      </p>\n\n         <!-- <ion-item>\n\n            <ion-label floating>All Address</ion-label>\n\n            <ion-textarea rows="3" formControlName="address"></ion-textarea>\n\n        </ion-item>\n\n          <p *ngIf="address.hasError(\'required\') && address.touched">\n\n               <span class="red">enter your address</span>\n\n             </p>\n\n         -->\n\n    </ion-list>\n\n   </div>\n\n     <div class="policy">\n\n   	  <p>By signing up, you agree all the <span><a href="#">terms and Privacy Policy</a></span></p>\n\n   </div>\n\n   <button ion-button block type="submit">Sign UP</button>\n\n   </form>\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-toolbar>\n\n    <div class="footer-login">\n\n    	<p>Already have an account?<span> <a (click)="loginPage()"> Sign in</a></span></p>\n\n    </div> 	\n\n  </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Users\pc\myApp\src\pages\sign-up\sign-up.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__providers_auth_service_auth_service__["a" /* AuthServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], SignUpPage);
    return SignUpPage;
}());

//# sourceMappingURL=sign-up.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit_profile_edit_profile__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the MyProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyProfilePage = /** @class */ (function () {
    function MyProfilePage(navCtrl, navParams, authServiceProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authServiceProvider = authServiceProvider;
        this.loginData();
    }
    MyProfilePage.prototype.loginData = function () {
        this.userData = this.authServiceProvider.usermodel;
    };
    MyProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MyProfilePage');
    };
    MyProfilePage.prototype.editprofile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__edit_profile_edit_profile__["a" /* EditProfilePage */]);
    };
    MyProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-my-profile',template:/*ion-inline-start:"C:\Users\pc\myApp\src\pages\my-profile\my-profile.html"*/'<ion-header>\n  <ion-navbar color="blue">\n\n    <ion-grid>\n      <ion-row>\n      	<ion-col col-4>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n</ion-col>\n<ion-col col-4>\n    <ion-title class="profile">Profile</ion-title>\n</ion-col>\n<ion-col col-4>\n    <button ion-button class="edit">\n    	<ion-icon name="create" (click)="editprofile()"></ion-icon>\n    </button>\n</ion-col>\n</ion-row>\n</ion-grid>\n    <ion-grid>\n      <ion-row>\n      	<div class="profile-box">\n         <div class="profile-pic">\n    	   <img src="assets/imgs/profile.jpg">\n         </div>\n         <h3 class="profile-name">{{ userData.fname + " " + userData.lname }}</h3>\n     </div>\n     </ion-row>\n</ion-grid>\n     \n  </ion-navbar> \n</ion-header>\n<!-- Segment in a header -->\n<ion-content >\n<ion-card>\n  <ion-card-header>\n    PROFILE DETAILS\n  </ion-card-header>\n  <ion-grid>\n      <ion-row>\n	  <ion-list>\n		   <ion-item>\n		    <ion-avatar item-start>\n		      <img class="img-icon" src="assets/imgs/icons/default_user_id.png">\n		    </ion-avatar>\n		    <h2 class="allheading">{{ userData.userid }}</h2>\n		    <p>User Id</p>\n		  </ion-item>\n      </ion-list>\n     </ion-row>\n     <ion-row>\n	  <ion-list>\n		   <ion-item>\n		    <ion-avatar item-start>\n		      <img class="img-icon" src="assets/imgs/icons/default_user_types.png">\n		    </ion-avatar>\n		    <h2 class="allheading">{{ userData.usertype }}</h2>\n		    <p>User Type</p>\n		  </ion-item>\n      </ion-list>\n     </ion-row>\n     <ion-row>\n     	<ion-col col-7>\n	  <ion-list>\n		   <ion-item>\n		    <ion-avatar item-start>\n		      <img class="img-icon" src="assets/imgs/icons/default_mobile.png">\n		    </ion-avatar>\n		    <h2 class="allheading">{{ userData.fname }}</h2>\n		    <p>First Name</p>\n		  </ion-item>\n      </ion-list>\n      </ion-col>\n      <ion-col col-5>\n	  <ion-list>\n		   <ion-item>\n		    <h2 class="allheading">{{ userData.lname }}</h2>\n		    <p>Last Name</p>\n		  </ion-item>\n      </ion-list>\n      </ion-col>\n     </ion-row>\n      <ion-row>\n	  <ion-list>\n		   <ion-item>\n		    <ion-avatar item-start>\n		      <img class="img-icon" src="assets/imgs/icons/default_gender.png">\n		    </ion-avatar>\n		    <h2 class="allheading">{{ userData.gender }}</h2>\n		    <p>Gender</p>\n		  </ion-item>\n      </ion-list>\n     </ion-row>\n      <ion-row>\n	  <ion-list>\n		   <ion-item>\n		    <ion-avatar item-start>\n		      <img class="img-icon" src="assets/imgs/icons/default_dob.png">\n		    </ion-avatar>\n		    <h2>{{ userData.birthdate }}</h2>\n		    <p>Birthday</p>\n		  </ion-item>\n      </ion-list>\n     </ion-row>\n      <ion-row>\n	  <ion-list>\n		   <ion-item>\n		    <ion-avatar item-start>\n		      <img class="img-icon" src="assets/imgs/icons/default_location.png">\n		    </ion-avatar>\n		    <h2>{{ userData.Address }}</h2>\n		    <p>Address</p>\n		  </ion-item>\n      </ion-list>\n     </ion-row>\n      <ion-row>\n	  <ion-list>\n		   <ion-item>\n		    <ion-avatar item-start>\n		      <img class="img-icon" src="assets/imgs/icons/default_occupation.png">\n		    </ion-avatar>\n		    <h2 class="allheading">{{ userData.Occupation }}</h2>\n		    <p>Occupation</p>\n		  </ion-item>\n      </ion-list>\n     </ion-row>\n      <ion-row>\n	  <ion-list>\n		   <ion-item>\n		    <ion-avatar item-start>\n		      <img class="img-icon" src="assets/imgs/icons/default_location.png">\n		    </ion-avatar>\n		    <h2>{{ userData.mobileno }}</h2>\n		    <p>Mobile Number</p>\n		  </ion-item>\n      </ion-list>\n     </ion-row>\n     <ion-row>\n	  <ion-list>\n		   <ion-item>\n		    <ion-avatar item-start>\n		      <img class="img-icon" src="assets/imgs/icons/default_email.png">\n		    </ion-avatar>\n		    <h2>{{ userData.email }}</h2>\n		    <p>Email</p>\n		  </ion-item>\n      </ion-list>\n     </ion-row>\n      <ion-row>\n	  <ion-list>\n		   <ion-item>\n		    <ion-avatar item-start>\n		      <img class="img-icon" src="assets/imgs/icons/default_info.png">\n		    </ion-avatar>\n		    <h2>{{ userData.about }}</h2>\n		    <p>About</p>\n		  </ion-item>\n      </ion-list>\n     </ion-row>\n   </ion-grid>\n</ion-card>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\pc\myApp\src\pages\my-profile\my-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], MyProfilePage);
    return MyProfilePage;
}());

//# sourceMappingURL=my-profile.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ReportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReportPage = /** @class */ (function () {
    function ReportPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ReportPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ReportPage');
    };
    ReportPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-report',template:/*ion-inline-start:"C:\Users\pc\myApp\src\pages\report\report.html"*/'<ion-header>\n  <ion-navbar color="blue">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Report</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\pc\myApp\src\pages\report\report.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ReportPage);
    return ReportPage;
}());

//# sourceMappingURL=report.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchClientPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_clientsearch_clientsearch__ = __webpack_require__(81);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { ClientDetailsPage } from '../client-details/client-details';
/**
 * Generated class for the SearchClientPage page.
 * serach client by search baar.
 */
var SearchClientPage = /** @class */ (function () {
    function SearchClientPage(navCtrl, navParams, clientsearchProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.clientsearchProvider = clientsearchProvider;
        this.todo = { "mobile": "" };
        this.getClient();
    }
    SearchClientPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SearchClientPage');
    };
    SearchClientPage.prototype.getClient = function () {
        this.clientsearchProvider.getClient(this.todo, "followup_list").then(function (result) {
            // this.clientData = result; 
            // this.navCtrl.push(ClientDetailsPage);
            //console.log(this.clientData);
        }, function (err) {
        });
    };
    SearchClientPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-search-client',template:/*ion-inline-start:"C:\Users\pc\myApp\src\pages\search-client\search-client.html"*/'<ion-header>\n  <ion-navbar color="blue">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Search Clients</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content  padding>\n  <form (ngSubmit)="getClient()">\n  <ion-list>\n   <!-- <ion-item class="search-box">\n    <ion-input type="text" name="keyword" placeholder="Search By KeyWord" [(ngModel)]="todo.keyword"></ion-input>\n  </ion-item> -->\n  <br>\n  <ion-item class="search-box">\n    <ion-input type="number" name="mobile" placeholder="Search By Mobile Number"  [(ngModel)]="todo.mobile"></ion-input>\n  </ion-item>\n  </ion-list>\n      <button ion-button block color="blue"  type="submit">Search</button>\n    </form> \n</ion-content>\n'/*ion-inline-end:"C:\Users\pc\myApp\src\pages\search-client\search-client.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_clientsearch_clientsearch__["a" /* ClientsearchProvider */]])
    ], SearchClientPage);
    return SearchClientPage;
}());

//# sourceMappingURL=search-client.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SendSmsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SendSmsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SendSmsPage = /** @class */ (function () {
    function SendSmsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SendSmsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SendSmsPage');
    };
    SendSmsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-send-sms',template:/*ion-inline-start:"C:\Users\pc\myApp\src\pages\send-sms\send-sms.html"*/'\n<ion-header>\n  <ion-navbar color="blue">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Send sms</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n	 <div class="sendsms">\n         <ion-list>\n           <ion-item>\n               <ion-input type="text" placeholder="Mobile Number"></ion-input>\n         </ion-item>\n          <br>\n         <ion-item>\n            <ion-input type="password" placeholder="Search By Mobile Number"></ion-input>\n         </ion-item>\n         <ion-item>\n		    <ion-label>Language</ion-label>\n		    <ion-select>\n		      <ion-option value="nes">English</ion-option>\n		      <ion-option value="n64">Hindi</ion-option>\n		    </ion-select>\n		  </ion-item>\n		  <ion-item>\n		    <ion-label>NON-DND</ion-label>\n		    <ion-select>\n		      <ion-option value="nes">English</ion-option>\n		      <ion-option value="n64">Hindi</ion-option>\n		    </ion-select>\n		  </ion-item>\n		  <ion-item>\n		    <ion-label>Select</ion-label>\n		    <ion-select>\n		      <ion-option value="nes">English</ion-option>\n		      <ion-option value="n64">Hindi</ion-option>\n		    </ion-select>\n		  </ion-item>\n		  <ion-item>\n		    <ion-label stacked>Type Your Message</ion-label>\n		    <ion-input type="text"></ion-input>\n		  </ion-item>\n     </ion-list>\n          <ion-grid>\n			  <ion-row>\n			    <ion-col col-6><button ion-button block outline>CANCEL</button></ion-col>\n			 \n			    <ion-col col-6><button ion-button block>SEND</button></ion-col>\n			  </ion-row>\n       </ion-grid>\n</div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\pc\myApp\src\pages\send-sms\send-sms.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], SendSmsPage);
    return SendSmsPage;
}());

//# sourceMappingURL=send-sms.js.map

/***/ }),

/***/ 129:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 129;

/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/client-details/client-details.module": [
		296,
		16
	],
	"../pages/clint/clint.module": [
		297,
		15
	],
	"../pages/edit-profile/edit-profile.module": [
		298,
		14
	],
	"../pages/follow-up-details/follow-up-details.module": [
		299,
		13
	],
	"../pages/forgot-password/forgot-password.module": [
		300,
		12
	],
	"../pages/login/login.module": [
		301,
		11
	],
	"../pages/my-profile/my-profile.module": [
		302,
		10
	],
	"../pages/otp/otp.module": [
		303,
		9
	],
	"../pages/quotation-details/quotation-details.module": [
		304,
		8
	],
	"../pages/report/report.module": [
		305,
		7
	],
	"../pages/reset-password/reset-password.module": [
		306,
		6
	],
	"../pages/search-client/search-client.module": [
		307,
		5
	],
	"../pages/send-sms/send-sms.module": [
		308,
		4
	],
	"../pages/sign-up/sign-up.module": [
		309,
		3
	],
	"../pages/splash-screen/splash-screen.module": [
		310,
		1
	],
	"../pages/today-follow-up/today-follow-up.module": [
		311,
		2
	],
	"../pages/visit-details/visit-details.module": [
		312,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 171;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_clientsearch_clientsearch__ = __webpack_require__(81);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ClientDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ClientDetailsPage = /** @class */ (function () {
    function ClientDetailsPage(navCtrl, navParams, clientsearchProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.clientsearchProvider = clientsearchProvider;
        this.clientdatalists = [];
        this.getClient();
    }
    ClientDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ClientDetailsPage');
    };
    ClientDetailsPage.prototype.getClient = function () {
        this.clientdata = this.clientsearchProvider.clientmodel;
        //console.log(this.clientdata);
        this.clientdatalists = this.clientdata;
        //console.log(this.clientdatalists);
    };
    ClientDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-client-details',template:/*ion-inline-start:"C:\Users\pc\myApp\src\pages\client-details\client-details.html"*/'<ion-header>\n  <ion-navbar color="blue">\n<button ion-button menuToggle>\n <ion-icon name="menu"></ion-icon>\n</button>\n<ion-title>Search by</ion-title>\n</ion-navbar>	\n\n</ion-header>\n\n\n<ion-content>\n<ion-card *ngFor="let clientdatalist of clientdatalists"> \n<ion-list>\n   <button ion-item>\n     <ion-icon name="ios-arrow-forward" class="position-right"></ion-icon>\n     <div class="card-title">Firm Name</div>\n     <div class="card-subtitle" text-wrap>{{ clientdatalist.firmname }}</div>\n   </button>\n </ion-list>\n</ion-card>\n</ion-content>\n<!-- (click)="nextPage(todayfollowitem.id)" -->'/*ion-inline-end:"C:\Users\pc\myApp\src\pages\client-details\client-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_clientsearch_clientsearch__["a" /* ClientsearchProvider */]])
    ], ClientDetailsPage);
    return ClientDetailsPage;
}());

//# sourceMappingURL=client-details.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(235);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_image_picker__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_list_list__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_today_follow_up_today_follow_up__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_follow_up_details_follow_up_details__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_clint_clint__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_search_client_search_client__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_send_sms_send_sms__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_report_report__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_quotation_details_quotation_details__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_my_profile_my_profile__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_login_login__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_sign_up_sign_up__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_forgot_password_forgot_password__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_otp_otp__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_reset_password_reset_password__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_edit_profile_edit_profile__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_client_details_client_details__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_status_bar__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_splash_screen__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_followup_followup__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_clientsearch_clientsearch__ = __webpack_require__(81);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_today_follow_up_today_follow_up__["a" /* TodayFollowUpPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_follow_up_details_follow_up_details__["a" /* FollowUpDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_clint_clint__["a" /* ClintPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_search_client_search_client__["a" /* SearchClientPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_send_sms_send_sms__["a" /* SendSmsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_report_report__["a" /* ReportPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_quotation_details_quotation_details__["a" /* QuotationDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_my_profile_my_profile__["a" /* MyProfilePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_sign_up_sign_up__["a" /* SignUpPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_forgot_password_forgot_password__["a" /* ForgotPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_otp_otp__["a" /* OtpPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_reset_password_reset_password__["a" /* ResetPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_edit_profile_edit_profile__["a" /* EditProfilePage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_client_details_client_details__["a" /* ClientDetailsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/client-details/client-details.module#ClientDetailsPageModule', name: 'ClientDetailsPage', segment: 'client-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/clint/clint.module#ClintPageModule', name: 'ClintPage', segment: 'clint', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-profile/edit-profile.module#EditProfilePageModule', name: 'EditProfilePage', segment: 'edit-profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/follow-up-details/follow-up-details.module#FollowUpDetailsPageModule', name: 'FollowUpDetailsPage', segment: 'follow-up-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/forgot-password/forgot-password.module#ForgotPasswordPageModule', name: 'ForgotPasswordPage', segment: 'forgot-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/my-profile/my-profile.module#MyProfilePageModule', name: 'MyProfilePage', segment: 'my-profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/otp/otp.module#OtpPageModule', name: 'OtpPage', segment: 'otp', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/quotation-details/quotation-details.module#QuotationDetailsPageModule', name: 'QuotationDetailsPage', segment: 'quotation-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/report/report.module#ReportPageModule', name: 'ReportPage', segment: 'report', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reset-password/reset-password.module#ResetPasswordPageModule', name: 'ResetPasswordPage', segment: 'reset-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search-client/search-client.module#SearchClientPageModule', name: 'SearchClientPage', segment: 'search-client', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/send-sms/send-sms.module#SendSmsPageModule', name: 'SendSmsPage', segment: 'send-sms', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sign-up/sign-up.module#SignUpPageModule', name: 'SignUpPage', segment: 'sign-up', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/splash-screen/splash-screen.module#SplashScreenPageModule', name: 'SplashScreenPage', segment: 'splash-screen', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/today-follow-up/today-follow-up.module#TodayFollowUpPageModule', name: 'TodayFollowUpPage', segment: 'today-follow-up', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/visit-details/visit-details.module#VisitDetailsPageModule', name: 'VisitDetailsPage', segment: 'visit-details', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_today_follow_up_today_follow_up__["a" /* TodayFollowUpPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_follow_up_details_follow_up_details__["a" /* FollowUpDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_clint_clint__["a" /* ClintPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_search_client_search_client__["a" /* SearchClientPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_send_sms_send_sms__["a" /* SendSmsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_report_report__["a" /* ReportPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_quotation_details_quotation_details__["a" /* QuotationDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_my_profile_my_profile__["a" /* MyProfilePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_sign_up_sign_up__["a" /* SignUpPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_forgot_password_forgot_password__["a" /* ForgotPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_otp_otp__["a" /* OtpPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_reset_password_reset_password__["a" /* ResetPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_edit_profile_edit_profile__["a" /* EditProfilePage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_client_details_client_details__["a" /* ClientDetailsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_image_picker__["a" /* ImagePicker */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_26__providers_followup_followup__["a" /* FollowupProvider */],
                __WEBPACK_IMPORTED_MODULE_27__providers_clientsearch_clientsearch__["a" /* ClientsearchProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export clientModelResult */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return clientModel; });
var clientModelResult = /** @class */ (function () {
    function clientModelResult(CallStatus, ClientStage, Clientindustryname, FollowupRemark, Media, MobExt1, MobExt2, MobExt3, MobExt4, SmsDuration, SmsRemark, address, callingdate, callvisitdate, clientdetailid, clientfollowupby, clientfollowupdate, clientid, clientindustry, clientstatus, competerdetails, contactperson, country, createddate, createdupdatedby, district, email1, email2, enquirydate, expectedfinaliseddate, faxtel, firmname, followby, followdate, followmedia, greetingorder, id, mobile1, mobile2, mobile3, mobile4, pincode, quotationdate, remark, sname, sourceofenquiry, state, tranferfollowby, typeofenquiry, website) {
        this.CallStatus = CallStatus;
        this.ClientStage = ClientStage;
        this.Clientindustryname = Clientindustryname;
        this.FollowupRemark = FollowupRemark;
        this.Media = Media;
        this.MobExt1 = MobExt1;
        this.MobExt2 = MobExt2;
        this.MobExt3 = MobExt3;
        this.MobExt4 = MobExt4;
        this.SmsDuration = SmsDuration;
        this.SmsRemark = SmsRemark;
        this.address = address;
        this.callingdate = callingdate;
        this.callvisitdate = callvisitdate;
        this.clientdetailid = clientdetailid;
        this.clientfollowupby = clientfollowupby;
        this.clientfollowupdate = clientfollowupdate;
        this.clientid = clientid;
        this.clientindustry = clientindustry;
        this.clientstatus = clientstatus;
        this.competerdetails = competerdetails;
        this.contactperson = contactperson;
        this.country = country;
        this.createddate = createddate;
        this.createdupdatedby = createdupdatedby;
        this.district = district;
        this.email1 = email1;
        this.email2 = email2;
        this.enquirydate = enquirydate;
        this.expectedfinaliseddate = expectedfinaliseddate;
        this.faxtel = faxtel;
        this.firmname = firmname;
        this.followby = followby;
        this.followdate = followdate;
        this.followmedia = followmedia;
        this.greetingorder = greetingorder;
        this.id = id;
        this.mobile1 = mobile1;
        this.mobile2 = mobile2;
        this.mobile3 = mobile3;
        this.mobile4 = mobile4;
        this.pincode = pincode;
        this.quotationdate = quotationdate;
        this.remark = remark;
        this.sname = sname;
        this.sourceofenquiry = sourceofenquiry;
        this.state = state;
        this.tranferfollowby = tranferfollowby;
        this.typeofenquiry = typeofenquiry;
        this.website = website;
    }
    return clientModelResult;
}());

var clientModel = /** @class */ (function () {
    function clientModel(isSuccess, message, Result) {
    }
    return clientModel;
}());

//# sourceMappingURL=clientdetails.model.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_today_follow_up_today_follow_up__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_clint_clint__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_search_client_search_client__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_send_sms_send_sms__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_report_report__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_my_profile_my_profile__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { StatusBar } from '@ionic-native/status-bar';
// import { HomePage } from '../pages/home/home';
// import { ListPage } from '../pages/list/list';

// import { FollowUpDetailsPage } from '../pages/follow-up-details/follow-up-details';




// import { QuotationDetailsPage } from '../pages/quotation-details/quotation-details';


// import { SignUpPage } from '../pages/sign-up/sign-up';
// import { ForgotPasswordPage } from '../pages/forgot-password/forgot-password';
// import { OtpPage } from '../pages/otp/otp';
// import { ResetPasswordPage } from '../pages/reset-password/reset-password';
// import { EditProfilePage } from '../pages/edit-profile/edit-profile';
// import { ClientDetailsPage } from '../pages/client-details/client-details';
var MyApp = /** @class */ (function () {
    function MyApp(platform) {
        this.platform = platform;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_2__pages_today_follow_up_today_follow_up__["a" /* TodayFollowUpPage */] },
            { title: 'My Profile', component: __WEBPACK_IMPORTED_MODULE_7__pages_my_profile_my_profile__["a" /* MyProfilePage */] },
            { title: 'Client Enquiry', component: __WEBPACK_IMPORTED_MODULE_3__pages_clint_clint__["a" /* ClintPage */] },
            { title: 'Search Clients', component: __WEBPACK_IMPORTED_MODULE_4__pages_search_client_search_client__["a" /* SearchClientPage */] },
            { title: 'Today Follow Up', component: __WEBPACK_IMPORTED_MODULE_2__pages_today_follow_up_today_follow_up__["a" /* TodayFollowUpPage */] },
            { title: 'Report', component: __WEBPACK_IMPORTED_MODULE_6__pages_report_report__["a" /* ReportPage */] },
            { title: 'Email/Sms', component: __WEBPACK_IMPORTED_MODULE_5__pages_send_sms_send_sms__["a" /* SendSmsPage */] },
            { title: 'Setting', component: __WEBPACK_IMPORTED_MODULE_4__pages_search_client_search_client__["a" /* SearchClientPage */] },
            { title: 'Logout', component: __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            // , public statusBar: StatusBar
            //this.statusBar.styleDefault();
            // this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\pc\myApp\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content >\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\pc\myApp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.items = [
            'Pokémon Yellow',
            'Super Metroid',
            'Mega Man X',
            'The Legend of Zelda',
            'Pac-Man',
            'Super Mario World',
            'Street Fighter II',
            'Half Life',
            'Final Fantasy VII',
            'Star Fox',
            'Tetris',
            'Donkey Kong III',
            'GoldenEye 007',
            'Doom',
            'Fallout',
            'GTA',
            'Halo'
        ];
    }
    HomePage.prototype.itemSelected = function (item) {
        console.log("Selected Item", item);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\pc\myApp\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar color="blue">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Home</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="login-background">\n\n       \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\pc\myApp\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"C:\Users\pc\myApp\src\pages\list\list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\pc\myApp\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var apiUrl = "http://34.207.7.22/indiagrain/index.php/api_panel/users/";
/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AuthServiceProvider = /** @class */ (function () {
    function AuthServiceProvider(http) {
        this.http = http;
        console.log('Hello AuthServiceProvider Provider');
    }
    AuthServiceProvider.prototype.postData = function (credentials, user_sign_up) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]();
            _this.http.post(apiUrl + user_sign_up, JSON.stringify(credentials), { headers: headers }).subscribe(function (res) {
                resolve(JSON.stringify(res));
                _this.signupvalue = JSON.stringify(res['status']);
                if (_this.signupvalue == "true") {
                    return ("signup succesfully");
                }
                else {
                    return ("user already exist");
                }
            }, function (err) {
                reject(err);
            });
        });
    };
    // login function-------
    AuthServiceProvider.prototype.loginData = function (credentials, user_login) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]();
            _this.http.post(apiUrl + user_login, JSON.stringify(credentials), { headers: headers }).subscribe(function (res) {
                resolve(JSON.stringify(res));
                _this.loginuserdata = JSON.stringify(res['Result']);
                _this.usermodel = res['Result'];
                _this.jsonvalue = JSON.stringify(res['isSuccess']);
                if (_this.jsonvalue == "true") {
                    return ("login succesfully");
                }
                else {
                    return ('user dose not exist');
                }
            }, function (err) {
                reject(err);
            });
        });
    };
    AuthServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], AuthServiceProvider);
    return AuthServiceProvider;
}());

//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__today_follow_up_today_follow_up__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sign_up_sign_up__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__forgot_password_forgot_password__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_service_auth_service__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(formBuilder, navCtrl, navParams, authServiceProvider, alertCtrl) {
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authServiceProvider = authServiceProvider;
        this.alertCtrl = alertCtrl;
        this.submitted = false;
        this.logData = { "userid": "", "pwd": "" };
        this.mygroup = formBuilder.group({
            userid: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
        this.userid = this.mygroup.controls['userid'];
        this.password = this.mygroup.controls['password'];
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.homePage = function () {
        var _this = this;
        this.submitted = true;
        if (this.mygroup.valid) {
            // console.log(this.mygroup.value);
            //this.navCtrl.setRoot(TodayFollowUpPage)
            this.authServiceProvider.loginData(this.logData, "user_login").then(function (result) {
                _this.responseData = result;
                var iscondition = JSON.parse(result).isSuccess;
                if (iscondition == true) {
                    //alert("login successfully");
                    var alert_1 = _this.alertCtrl.create({
                        title: '',
                        subTitle: 'Login Successfully',
                        buttons: ['OK']
                    });
                    alert_1.present();
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__today_follow_up_today_follow_up__["a" /* TodayFollowUpPage */]);
                }
                else {
                    var alert_2 = _this.alertCtrl.create({
                        title: '',
                        subTitle: 'User Does Not Exist',
                        buttons: ['OK']
                    });
                    alert_2.present();
                }
                //this.navCtrl.setRoot(TodayFollowUpPage);
            }, function (err) {
            });
            // this.navCtrl.setRoot(TodayFollowUpPage);
        }
    };
    LoginPage.prototype.signUp = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__sign_up_sign_up__["a" /* SignUpPage */]);
    };
    LoginPage.prototype.forgotPass = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__forgot_password_forgot_password__["a" /* ForgotPasswordPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\pc\myApp\src\pages\login\login.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="blue">\n\n    <ion-title>Login</ion-title>\n\n  </ion-navbar>\n\n \n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n   <div class="logo">\n\n   	  <img src="/assets/imgs/logo/login_logo.png">\n\n   </div>\n\n   <form [formGroup]="mygroup" (ngSubmit)="homePage()">\n\n   <div class="login-form">\n\n   	  <ion-list>\n\n\n\n  <ion-item>\n\n    <ion-label floating><span><ion-icon name="person"></ion-icon></span> User Id</ion-label>\n\n    <ion-input type="text" formControlName="userid" [(ngModel)]="logData.userid"></ion-input>\n\n  </ion-item>\n\n  <p *ngIf="userid.hasError(\'required\') && userid.touched">\n\n    <span class="red">Pls Enter your User Id</span>\n\n  </p>\n\n  <ion-item>\n\n  	 \n\n     <ion-label floating><span><ion-icon name="lock"></ion-icon></span> Password</ion-label>\n\n    <ion-input type="password" formControlName="password" [(ngModel)]="logData.pwd"></ion-input>\n\n  </ion-item>\n\n  <p *ngIf="password.hasError(\'required\') && password.touched">\n\n    <span class="red">Pls Enter your password</span>\n\n  </p>\n\n</ion-list>\n\n   </div>\n\n   <div class="remember">\n\n   	<ion-list>\n\n   	<ion-item>\n\n   	<ion-label>Remember me</ion-label>\n\n    <ion-checkbox class="checkbox-margin" required></ion-checkbox>\n\n</ion-item>\n\n</ion-list>\n\n   </div>\n\n   <button   type="submit" ion-button block >LOG IN</button>\n\n   <div class="forgot-password">\n\n   	  <a href="#"  (click)="forgotPass()">Forgot Password?</a>\n\n   </div>\n\n </form>\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-toolbar>\n\n    <div class="footer-login">\n\n    	<p>Don\'t have account?<span> <a (click)="signUp()"> Sign Up</a></span></p>\n\n    </div> 	\n\n  </ion-toolbar>\n\n</ion-footer>\n\n '/*ion-inline-end:"C:\Users\pc\myApp\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_6__providers_auth_service_auth_service__["a" /* AuthServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodayFollowUpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__follow_up_details_follow_up_details__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_followup_followup__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the TodayFollowUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TodayFollowUpPage = /** @class */ (function () {
    function TodayFollowUpPage(navCtrl, navParams, followupProvider, authServiceProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.followupProvider = followupProvider;
        this.authServiceProvider = authServiceProvider;
        this.todayfollowitems = [];
        this.getData = { "followby": "aparnadutta1", "today_followup": "2018-02-01" };
        this.loginData();
        this.todayData();
    }
    TodayFollowUpPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TodayFollowUpPage');
    };
    TodayFollowUpPage.prototype.nextPage = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__follow_up_details_follow_up_details__["a" /* FollowUpDetailsPage */], { id: id });
    };
    TodayFollowUpPage.prototype.loginData = function () {
        this.userData = this.authServiceProvider.usermodel;
        // console.log(this.userData.userid);
    };
    TodayFollowUpPage.prototype.todayData = function () {
        var _this = this;
        this.followupProvider.todayData(this.getData, "followup_list").then(function (result) {
            _this.followupData = _this.followupProvider.followupmodel;
            _this.todayfollowitems = _this.followupData;
            // console.log(this.followupData[0].id);
        }, function (err) {
        });
    };
    TodayFollowUpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-today-follow-up',template:/*ion-inline-start:"C:\Users\pc\myApp\src\pages\today-follow-up\today-follow-up.html"*/'<ion-header>\n       <ion-navbar color="blue">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Today Follow Up</ion-title>\n  </ion-navbar>	\n\n</ion-header>\n\n\n<ion-content>\n	 <ion-card (click)="nextPage(todayfollowitem.id)" *ngFor="let todayfollowitem of todayfollowitems"> \n     <ion-list>\n		    <button ion-item>\n		      <ion-icon name="ios-arrow-forward" class="position-right"></ion-icon>\n		      <div class="card-title">Firm Name</div>\n		      <div class="card-subtitle" text-wrap>{{ todayfollowitem.firmname }}</div>\n		    </button>\n		  </ion-list>\n   </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\pc\myApp\src\pages\today-follow-up\today-follow-up.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_followup_followup__["a" /* FollowupProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], TodayFollowUpPage);
    return TodayFollowUpPage;
}());

//# sourceMappingURL=today-follow-up.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientsearchProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_clientsearch_clientdetails_model__ = __webpack_require__(265);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var apiUrl = "http://34.207.7.22/indiagrain/index.php/api_panel/followups/";
var ClientsearchProvider = /** @class */ (function () {
    function ClientsearchProvider(http) {
        this.http = http;
        this.clientmodel = __WEBPACK_IMPORTED_MODULE_2__providers_clientsearch_clientdetails_model__["a" /* clientModel */];
        console.log('Hello ClientsearchProvider Provider');
    }
    ClientsearchProvider.prototype.getClient = function (credentials, followup_list) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]();
            _this.http.post(apiUrl + followup_list, JSON.stringify(credentials), { headers: headers }).subscribe(function (res) {
                resolve(JSON.stringify(res));
                _this.clientData = res;
                _this.clientmodel = res['Result'];
                // console.log(this.clientData);
            }, function (err) {
                reject(err);
            });
        });
    };
    ClientsearchProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ClientsearchProvider);
    return ClientsearchProvider;
}());

//# sourceMappingURL=clientsearch.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FollowupProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var apiUrl = "http://34.207.7.22/indiagrain/index.php/api_panel/followups/";
/*
  Generated class for the FollowupProvider provider.

*/
var FollowupProvider = /** @class */ (function () {
    function FollowupProvider(http) {
        this.http = http;
        //  console.log('Hello FollowupProvider Provider');
    }
    FollowupProvider.prototype.todayData = function (credentials, followup_list) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]();
            _this.http.post(apiUrl + followup_list, JSON.stringify(credentials), { headers: headers }).subscribe(function (res) {
                resolve(JSON.stringify(res));
                _this.followupmodel = res['Result'];
                _this.followdata = _this.followupmodel;
                // this.followdataid = (this.followdata[0].id);
                //console.log(this.followdataid);
            }, function (err) {
                reject(err);
            });
        });
    };
    FollowupProvider.prototype.detailsData = function (credentials, followup_list) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]();
            _this.http.post(apiUrl + followup_list, JSON.stringify(credentials), { headers: headers }).subscribe(function (res) {
                resolve(JSON.stringify(res));
                _this.followupmodel = res['Result'];
                //this.followupdetails = this.followupmodel;
                // console.log(this.followupdetails);
            }, function (err) {
                reject(err);
            });
        });
    };
    FollowupProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], FollowupProvider);
    return FollowupProvider;
}());

//# sourceMappingURL=followup.js.map

/***/ })

},[214]);
//# sourceMappingURL=main.js.map