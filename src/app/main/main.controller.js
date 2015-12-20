'use strict';

angular.module('resume')
  .controller('MainCtrl', function ($scope, $window) {
    // $window.title = "Kyle Nolan's Resume";
    document.title = "Kyle Nolan's Resume";

    var ctrl = this;
    $scope.numPngs = 8;
    $scope.getNumber = function(num) {
      var ret = [];
      for (var i=0; i<num; i++) {
        ret.push({id: i});
      }
      return ret;
    }

    var data = {
      name: {
        first:"Kyle",
        last:"Nolan"
      },
      career: "Computer Engineer",
      link: "kylenolan.net",
      linkHref: "http://www.kylenolan.net",
      mailHref: "mailto:kyle.c.nolan@gmail.com",
      githubHref: "http://www.github.com/kcnolan13",
      phoneHref: "",
      mail: "kyle.c.nolan@gmail.com",
      github: "kcnolan13",
      phone: '207.975.1248',
      lcol: [
        {
            title: "Education",
            items: [
              {
                title:"Bachelor of Science, Computer Engineering",
                company:"University of Maine",
                description: [
                  "Cumulative GPA 3.979"
                ],
                start:"Sep 2011",
                end:"May 2015",
              },
            ]
        },
        {
          title: "Professional Experience",
          items: [
            {
              title:"Software Developer",
              company:"Tyler Technologies",
              description: [
                "Built enterprise-level ERP web applications with AngularJS and C# .NET.",
                "Improved existing legacy code: HTML5, SilverLight, C#, and TSQL.",
                "Gained experience writing TSQL views, tables, and stored procedures."
              ],
              start:"June 2015",
              end:"Present",
            },{
              title:"Software Engineering Intern",
              company:"NOAA Hurricane Hunters",
              description: [
                "Designed and implemented an on-aircraft, georectified data display application.",
                "Developed in C++, Perl, PHP, JavaScript, HTML, CSS, KML and PostgreSQL.",
                "Application is used by NOAA flight directors to inform core mission decisions.",
                "Presented to the National Hurricane Center in Miami, FL.",
                "Presented at the 2015 Science and Education Symposium in Silver Springs, MD."
              ],
              start:"May 2014",
              end:"Aug 2014",
            },{
              title:"Independent Game Developer",
              company:"kylenolan.net/#/games",
              description: [
                "Coded in C++ and GML. Developed lighting and physics engines from scratch.",
                "Wrote a clustered, dedicated server in NodeJS to facilitate multiplayer matches.",
                "Used the C++ and JavaScript socket.io APIs for game state synchronization.",
                "Carried two games through the full development and marketing cycle.",
                "Composed original music, designed art/animation."
              ],
              start:"Jul 2013",
              end:"Sep 2015",
            },{
              title:"IT Auditing Intern",
              company:"Sheshunoff Consulting and Solutions",
              description: [
                "Presented and justified audit findings during executive meetings.",
                "Built spreadsheet templates to streamline active directory testing.",
                "Wrote VBScript programs to automate documentation processes."
              ],
              start:"Aug 2013",
              end:"Aug 2013",
            },{
              title:"Undergraduate Researcher",
              company:"LASST, University of Maine",
              description: [
                "Studied thin film carbon for use in Nanopore Gene Sequencing.",
                "Experience with Design of Experiments and RF Magnetron Sputtering.",
                "Performed nanoscale thin film deposition in a clean room environment."
              ],
              start:"Jun 2013",
              end:"Aug 2013",
            }/*,{
              title:"Computer Technician",
              company:"Computer Solutions, LLC",
              description: [
                "Performed virus remediation, hardware replacements, and tune-ups/optimizaton.",
                "Gained customer relations experience in a professional setting."
              ],
              start:"Jun 2008",
              end:"Aug 2010",
            }*/
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
              "Proficient in JavaScript, NodeJS, C/C++, Python, JQuery, HTML, CSS, KML, Less, Grunt, Socket.io, AngularJS, OpenLayers",
              "Comfortable with Microsoft, Apple, and Linux operating systems (Ubuntu, Gnome, Kali).",
              "Experience using MySQL, TSQL, PostgreSQL, SQLServer",
              "Familiar with Apache, IIS, VMWare, Hyper-V, VirtualBox.",
              "Developed with Visual Studio, Sublime Text, Chrome Dev Tools, SQLServer Management Studio."
            ]
          },
          {
            title:"General Skills",
            type: "awards bullets",
            items: [
              "Articulate, professional public speaker",
              "SAT Scores: 720 Reading, 750 Writing, 700 Math",
              "SAT II Scores: 730 Math, 740 Lit.",
              "Spanish: Upper Intermediate Proficiency"
            ]
          },
          {
            title:"Honors and Awards",
            type: "awards",
            items: [
              "Outstanding Presentation Award, NOAA Science and Education Symposium, Silver Spring, MD (2014)",
              "NOAA Hollings Scholar (2013-2015)",
              "Vice President of the Tau Beta Pi Engineering Honor Society (2013-2014)",
              "24-Hour Programming IEEEXtreme Contest Competitor (2013).",
              "University of Maine Outstanding Student Merit Award Recipient (2012)"
              /*"Systems Engineering and Robotics Project Award Winner, West Point Summer Leaders Seminar (May 2010)"*/
            ]
          },
        ]
      }

    };

    ctrl = _.merge(ctrl, data);
    // console.log(ctrl);
  });

