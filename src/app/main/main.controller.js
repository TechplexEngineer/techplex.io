'use strict';

angular.module('resume')
  .controller('MainCtrl', function ($scope, $window) {
    // $window.title = "Blake Bourque's Resume";
    document.title = "Blake Bourque's Resume";
    var ctrl = this;
    var data = {
      name: {
        first:"Blake",
        last:"Bourque"
      },
      career: "Computer Engineer",
      link: "techplex.io",
      mail: "blake@techplex.io",
      github: "TechplexEngineer",
      lcol: [
        {
          title: "Professional Experience",
          items: [
            {
              title:"Summer Electrical Engineering Co-Op",
              company:"Sappi Fine Paper North America",
              description: [
                "Managed the final electrical connection and closeout of three new fire protection systems.",
                "Designed wiring diagrams using AutoCAD for Kajaani ash meter replacement, and managed project.",
                "Developed a test procedure for the finishing wrapline HMI virtualization project."
              ],
              start:"May 2014",
              end:"Aug 2014",
            },{
              title:"Summer Information Technology Co-Op",
              company:"Sappi Fine Paper North America",
              description: [
                "Developed a web database application to track critical network-connected devices in ASP.Net MVC.",
                "Collaborated with process control and network engineers to refine user experience of the application."
              ],
              start:"May 2013",
              end:"Aug 2013",
            },{
              title:"Summer Programming Intern",
              company:"Kepware Technologies",
              description: [
                "Programmed a module in C++ which allows KepServerEX to access remote data via XML SOAP.",
                "Developed documentation for internal and customer use."

              ],
              start:"May 2012",
              end:"Aug 2012",
            },{
              title:"Web Application Engineer",
              company:"DeepCwind Consortium",
              description: [
                "Designed an online purchase order reimbursement system, with dynamic totaling and validation.",
                "Implemented a remote data acquisition system to act as a scoring system for the Windstorm Challenge."
              ],
              start:"Feb 2012",
              end:"Apr 2012",
            },{
              title:"Founder/Web Application Engineer",
              company:"Techplex Labs",
              description: [
                "Designed and built websites, for a variety of organizations on strict budgets.",
                "Responsible for the development and maintenance of web database applications."
              ],
              start:"Jan 2009",
              end:"Sep 2012",
            },{
              title:"Robotics Counselor",
              company:"Maine Robotics",
              description: [
                "Encouraged youth to learn more about engineering and computer science with Lego Mindstorms system.",
                "Provided a supportive environment for students to be excited about science and technology."
              ],
              start:"Jul & Aug 2008",
              end:"2011",
            }
          ]
        },{
          title: "Education",
          items: [
            {
              title:"Bachelor of Science Computer Engineering",
              company:"University of Maine",
              description: [
                "Expected May 2015",
                "GPA 3.717"
              ],
              start:"May 2014",
              end:"Aug 2014",
            },
          ]
        }



      ],
      rcol: {
        summary: "",
        ratings: [
          {
            title:"Technical Skills",
            items: []
          }
        ],
        lists: [
          {
            title:"Technical Skills",
            type: "awards bullets",
            items: [
              "Proficient with Microsoft, Apple & Linux (Ubuntu/Debian, Fedora/CentOS) ",
              "Fluent in Java, Python, PHP, C/C++, C#/ASP.NET MVC, Javascript/NodeJS, jQuery, Angular",
              "Experience with MySQL, mongoDB, SQLServer",
              "Developed with Visual Studio, Netbeans, vi/vim, Eclipse, InteliJ/Jetbrains, Sublime Text",
              "Familiar with Allen Bradley ControlLogix and RSLogix"
            ]
          },
          {
            title:"Honors",
            type: "awards",
            items: [
              "Eagle Scout, Troop 453",
              "Vice President Eta Kappa Nu Honor Society"
            ]
          },{
            title:"Scholarships / Involvement",
            type: "awards scholarship",
            items: [
              "University of Maine Pulp & Paper Foundation Scholarship 2011-2015",
              "Mentor FIRST Robotics Team 5122, The RoboTies",
              "IEEE Member"
            ]
          }
        ]
      }

    };

    ctrl = _.merge(ctrl, data);
    // console.log(ctrl);
  });

