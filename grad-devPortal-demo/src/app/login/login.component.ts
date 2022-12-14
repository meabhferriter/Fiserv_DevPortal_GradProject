import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
  NgForm,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserTypeService } from '../services/user-type/user-type.service';
import { UsersService } from '../services/user/users.service';
// import { UsersService } from '../users.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class AppLoginComponent implements OnInit {
  signInForm: FormGroup;
  userType: string;
  loginCounter=0;
  
  message:boolean=false;
  id:string;

  constructor(
    private router: Router,
    private route:ActivatedRoute,
    // private http: HttpClient,
    public server: UsersService,
    private fb: FormBuilder,
    // private usertypeSerice: UserTypeService,
    private popup: NgToastService
  ) {}

  ngOnInit(): void {
    //Initialise form
    this.signInForm = this.fb.group({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });

   
  }

  // onLogin() {
  //     console.log(this.signInForm); 
  //     if(!this.signInForm.valid){
  //           this.popup.error({detail:"Error Message",summary:"Enter the username and Password !!!!!!",duration:5000});
  //         }  
  //     if(this.signInForm.valid){
  //       this.server.logIn().subscribe(
  //         (res) => {
  //           let UserRole="";
  //           let check =false;
  //           let valid =false 
  //           let user = res.find((a: any) => {
  //           console.log("user",a.role,this.signInForm.value.username);
  //                         UserRole=a.role;    
  //                            if (a.username===this.signInForm.value.username
  //                             && a.password===this.signInForm.value.password)
  //                             { valid= true 
  //                               return  check=true;
  //                             }else if  (a.username===this.signInForm.value.username
  //                               && !(a.password===this.signInForm.value.password))
  //                               {
  //                                valid= false ;
  //                                 this.id=a.id;
  //                                 return  check=true;
  //                               } 
  //                            else return check ;
  //                      }); //end the find                       
  //                 console.log('user:',user,'userRole:',UserRole);
  //                 if(user){
  //                     if(check && valid){
  //                         if( UserRole=="Manger"){
  //                             this.popup.success({detail:"Success Message",summary:'you are an Admin',duration:5000});
  //                             this.signInForm.reset();
  //                             this.router.navigate(['/adminDashboard']);
  //                           }else{
  //                            this.router.navigate(['/userDashboard']);
  //                             this.popup.success({detail:"Success Message",summary:"you are user!!",duration:5000});
  //                            }
  //                        }
  //                     else if(!(check && valid))
  //                         {
  //                           if(this.loginCounter<3){
  //                                 // this.popup.error({detail:"Error Message",summary:" username or passord wrong  !!!!!!",duration:5000});
  //                                 this.loginCounter+=1;
  //                                 this.message=true;
  //                           }
  //                           else{  console.log(this.id);
  //                             this.router.navigate(['/deactivate-user',this.id]);
                            
                              
  //                           }
  //                          }
  //                      }
  //                 else     
  //                     { 
                                    
  //                       this.popup.error({detail:"Error Message",summary:"you have to register first !!!!!!",duration:5000});
  //                       this.router.navigate(['/register']);
  //                     }

  //         },err=>{
  //           this.popup.error({detail:"Error Message",summary:"Login Failed,try again later!!!!!!",duration:5000});
  //         });
  //       }
  //     // );
  //   } 


  login(){
    
      console.log(this.signInForm.value);
    if (this.signInForm.invalid)
    { return ;}
    else{
  
        this.server.logIn1(this.signInForm.value); 
    }
      //  const auth=this.server.getToken();
      //  console.log('auth',auth);
       
    // if(auth){
    //   this.router.navigate(['/userDashboard']);
    //   this.popup.success({detail:"Success Message",summary:"user autharazation !!",duration:5000});
    //  }else  if(!auth){
    //   this.message=true;
    //  this.loginCounter+=1;
    //  if(this.loginCounter===3){
    //  this.router.navigate(['/deactivate-user']);}
    //  }
    
  }
  onRegister() {
    
    this.router.navigate(['/register']);
    console.log('register');

  }
} 