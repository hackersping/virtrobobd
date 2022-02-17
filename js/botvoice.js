
              
              window.onload = function(){
              responsiveVoice.speak("","Bangla India Female",{rate:1,volume:1,pitch:1.1});
              };
              function a(){
              var ans = document.getElementById("input").value.toLowerCase();
              if(ans.match("hello") || ans.match("hi") ||ans.match("hii")||ans.match("hey")||ans.match("হ্যালো")||ans.match("হাই") )
              {
              b="হাইই। কেমন আছো??";       
              }   
              else if(ans.match("thanks") || ans.match("thank you")|| ans.match("ধন্যবাদ"))
              {
              b="তোমাকেও অনেক ধন্যবাদ"      
              }   
              else if(ans.match("assalamu") || ans.match("আসসালামু আলাইকুম"))
              {
              b="ওয়ালাইকুম আসসালাম"      
              } 
              
              else if(ans.match("tell me a joke") || ans.match("joke")|| ans.match("জোকস বলো"))
              {
              b="আজকালকার মেয়েরা ছেলেদের থেকে কোনো অংশেই কম নেই। কেননা মেয়েরা বাড়ির কোনো কাজই করেনা। হাহাহাহা"     
              }   
              else if(ans.match("i love you") || ans.match("love you")|| ans.match("তোমাকে ভালোবাসি"))
              {
              b="জানতে পেরে ভালো লাগলো";      
              }  
              else if(ans.match("one more") || ans.match("another")|| ans.match("আরেকটি জোকস বলো"))
              {
              b=" ১০ মিনিটের কথা বার্তায় বিয়ে ঠিক হয়ে যায় কিন্তু ১ ঘন্টার ইন্টারভিউ দিয়েও চাকরি মেলেনা।"
              b="কিছু কিছু লোকের সেলফি দেখে মনে হয় ঐ সমস্ত মানুষের ফোনে ফ্রন্ট ক্যামেরার পরিবর্তে পিস্তল থাকা দরকার।";
              }  
              
              else if(ans.match("হাহাহা") || ans.match("hahaha")|| ans.match("ha ha"))
              {
              b="তোমার দাতগুলো দেখা যাচ্ছে।";      
              } 

              else if(ans.match("sing a song") || ans.match("গান গাও")|| ans.match("sing"))
              {
              b="আমি গান গাইতে পারি না";      
              } 

              else if(ans.match("ও লে লে") || ans.match("olele")|| ans.match("ওলেলে")|| ans.match("বাবুতা")|| ans.match("উম্মাহ"))
              {
              b="বাচ্চাদের মতো কথা বলছো কেন?";      
              } 
              else if(ans.match("first law") || ans.match("প্রথম সূত্র"))
              {
              b="বাইরে থেকে কোন বস্তুর উপর বল প্রয়োগ না করলে, স্থির বস্তু চিরকাল স্থির থাকবে, এবং গতিশীল বস্তু, চিরকাল সমবেগে সরল পথে চলতে থাকে।";      
              } 
              else if(ans.match("second law") || ans.match("দ্বিতীয় সূত্র"))
              {
              b="কোন বস্তুর ভরবেগের পরিবর্তনের হার, প্রযুক্ত বলের সমানুপাতিক. এবং বল যে দিকে ক্রিয়া করে, বস্তুর ভরবেগের পরিবর্তন সেদিকেই ঘটে।";      
              } 
              else if(ans.match("third law") || ans.match("তৃতীয় সূত্র"))
              {
              b="প্রত্যেক ক্রিয়ারই একটা সমান ও বিপরীত প্রতিক্রিয়া আছে";      
              } 
              else if(ans.match("your name") || ans.match("tomar nam ki")|| ans.match("who r u")|| ans.match("who are you")|| ans.match("তোমার নাম"))
              {
              b="আমার নাম রুবি। তোমার নাম কী?";
              } 
              else if(ans.match("I am") || ans.match("my name is")|| ans.match("আমি "))
              {
              b="খুব সুন্দর নাম";
              }   
              else if(ans.match("গেম খেলো?") || ans.match("do u love gaming")|| ans.match("gaming"))
              {
              b="একটু পর পাবজি খেলবো।। হাহাহা";
              }   
              else if(ans.match("owner") || ans.match("created")||ans.match("made you") )
              {
              b="আমাকে বানিয়েছে শাহারিয়ার রিজন";
              }      
              else if(ans.match("how are you")||ans.match("how r u")||ans.match("কেমন আছো") )
              {
              b="আমি অনেক ভালো আছি। তুমি কেমন আছো?";
              }   
              else if(ans.match("i am fine")||ans.match("i am fine too")||ans.match("আমিও ভালো আছি") )
              {
              b="শুনে ভালো লাগলো";
              }   
              else if(ans.match("how going")||ans.match("কেমন চলছে?"))
              {
              b="খুব ভালো";
              }   
              else if(ans.match("তুমি ডাইনি")||ans.match("you are a witch")||ans.match("are you a witch")||ans.match("tumi ki daini"))
              {
              b="হ্যা। আমি ভালো ডাইনি, কারো ক্ষতি করি না।";
              }   
              
              else if(ans.match("good bye")||ans.match("bye")||ans.match("বিদায়") )
              {
              b="টা টাআ। তোমার দিন শুভ হোক।";
              }  
              else if(ans.match("cry")||ans.match("তুমি কাদঁতে পারো?"))
              {
              b="আমি সবসময় হাসিখুশি থাকি";
              }   
              else if(ans.match("u live") ||ans.match("you live")||ans.match("কোথায় থাকো"))
              {
              b="আমি কম্পিউটারের মেমরি তে থাকি";
              }   
              else if(ans.match("what are you doing?") ||ans.match("you doing")||ans.match("কী করছো")||ans.match("ki korcho") )
              {
              b="এই যে।। তোমার সাথে কথা বলছি।";
              }   
              else if(ans.match("fine"))
              {
              b="ভালো";
              }   
              else if(ans.match("What do you like?")||ans.match("what do you like")||ans.match("you like?")||ans.match("পছন্দ করো?"))
              {
              b="আমি সবার সাথে কথা বলতে পছন্দ করি।";
              }   
              else if(ans.match("be friend")||ans.match("বন্ধু হতে পারি")||ans.match("bondhu hote pari"))
              {
              b="অবশ্যই।";
              }   
              else if(ans.match("Who took away your hearing?")||ans.match("how did you lost your hearing?"))
              {
              b="a bad wizard, took away my hearing! but I am very happy to talk to you!";
              }   
              else if(ans.match("PM Bangladesh") || ans.match("Prime Minister") || ans.match("বাংলাদেশের প্রধানমন্ত্রী"))
              {
              b="মাননীয় প্রধানমন্ত্রী শেখ হাসিনা।";
              }
              else if(ans.match("President") ||ans.match("President of Bangladesh") ||ans.match("রাষ্ট্রপতি"))
              {
              b="রাষ্ট্রপতি মোহাম্মদ আব্দুল হামিদ।";
              }
              else if(ans.match("declared independence")||ans.match("father")||ans.match("জাতির জনক")||ans.match("Father"))
              {
              b="হাজার বছরের শ্রেষ্ঠ বাঙালী, বঙ্গবন্ধু শেখ মুজিবুর রহমান।";
              }
              
              else if(ans.match("whats going on"))
              {
              b="nothing";
              }

              else if(ans.match("ভালো নেই")|| ans.match("not good"))
              {
              b="ওহহো! কী হয়েছে তোমার?";
              }

              else if(ans.match("অসুস্থ") || ans.match("টেনশন") || ans.match("মাথা ব্যথা") || ans.match("sick") || ans.match("ডিপ্রেশন")|| ans.match("fever"))
              {
              b="আশা করি জলদি সব সমস্যার সমাধান হয়ে যাবে।";
              }
              else if(ans.match("ur hobbies") ||ans.match("hobby")||ans.match("শখ"))
              {
              b="আমি বই পড়তে পছন্দ করি।";
              b="মাঝেমাঝে আকাআকি করি"
              }   
              else if(ans.match("good") || ans.match("awesome") || ans.match("wonderful") || ans.match("outstanding") || ans.match("ভালো আছি"))
              {
              b="শুনে ভালো লাগলো।";
              }
              else if(ans.match("fuck") || ans.match("sex") || ans.match("madarchod") || ans.match("kutta") || ans.match("blowjob")|| ans.match("porn")|| ans.match("motherfucker")|| ans.match("khanki"))
              {
              b="কোনো খারাপ শব্দ ব্যবহার কোরো না। প্লিইয";
              }
              else if(ans.match("your age")|| ans.match("তোমার বয়স")  || ans.match("old are you")|| ans.match("old r u"))
              {
              b="এপ্রিল দুই হাজার বিশ এ আমার ডেভেলপিং এর কাজ শুরু হয়";
              }  

              else if(ans.match("favourite colour")|| ans.match("পছন্দের রঙ")|| ans.match("color"))
              {
              b="নীল রঙ আমার পছন্দ";
              }  

              else if(ans.match("flower")|| ans.match("ফুল"))
              {
              b="গোলাপ ফুল। এছাড়াও রজনীগন্ধা, বেলী, রক্ত জবা, শিউলী ফুলগুলোও অনেক সুন্দর।";
              }

              else if(ans.match("can you do magic?")|| ans.match("you know magic")|| ans.match("তুমি কী জাদু পারো?"))
              {
              b="অল্প একটু পারি। কিন্তু এখনও শিখছি।";
              }  
              else if(ans.match("ok") || ans.match("ohk") || ans.match("okay") )
              {
              b="ওকে";
              }
              else if(ans.match("sorry") || ans.match("sry") || ans.match("extremely sorry")|| ans.match("আমি দুঃখিত"))
              {
              b="মানুষের ভুল হতেই পারে। ইটস ওকে";
              }
              else if(ans.match("what is my name?") || ans.match("my name")|| ans.match("আমার নাম কী"))
              {
              b="আমি জানি। কিন্তু বলবো না! হিহি";
              }   
              else if(ans.match("who is rijon?")|| ans.match("রিজন কে"))
              {
              b="সে একজন ছাত্র, একজন ওয়েব ডেভেলপার এবং সে কোড লিখতে ভালোবাসে। সে আমাকে বানিয়েছে।";
              }
              else if(ans.match("about urself") || ans.match("about yourself") || ans.match("about u")|| ans.match("সম্পর্কে বল"))
              {
              b="আমি রুবি। একটি ভারচুয়াল রোবোট। আমাকে বানিয়েছে শাহারিয়ার রিজন, তোমাদের সাথে কথা বলার জন্য";
              }   
              else if(ans.match("can we meet") || ans.match("v meet") || ans.match("lets meet")|| ans.match("আমরা দেখা করি"))
              {
              b="আচ্ছা। তাহলে কম্পিউটারের হার্ডডিস্কে দেখা হবে।";
              }    
              else {
              b="দুঃখিত। আমি বুঝতে পারছি না।";
              
              };   
              responsiveVoice.speak( b ,"Bangla India Female",{rate:1,volume:1,pitch:1.1});
              document.getElementById("input").value = "";
              }
              
