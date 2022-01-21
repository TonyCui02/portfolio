import React from 'react'
import ProjectCard from './ProjectCard'
import nzcsaImage from '../../images/nzcsa.png'

export default function Projects() {
  const projectsData = [
    {
      title: 'Qualia',
      image:
        'https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/001/474/169/datas/gallery.jpg',
      github: 'https://github.com/TonyCui02/Qualia',
      description:
        'Qualia is a mobile app which allows users to scan food products barcode, and make a recommendation for their diet. With the growing complexity of dietary requirements, we aim to make it easier for people to know which foods are suitable for them.',
      demo: 'https://devpost.com/software/qualia',
    },
    {
      title: 'Find My Class',
      image:
        'https://raw.githubusercontent.com/TonyCui02/Find_my_class/v1.0/images/demo.PNG',
      github: 'https://github.com/TonyCui02/Find_my_class',
      description:
        'Find my class is a project started during the WDCC and Auckland university compsci society hackathon, Our program uses 3-D visualisation to help students find their way to their next university room',
      demo: 'https://tonycui02.github.io/Find_my_class/',
    },
    {
      title: 'Grocer',
      image:
        'https://user-images.githubusercontent.com/61865484/105789078-a4fb9500-5fe6-11eb-814d-c40532467fe3.png',
      github: 'https://github.com/TonyCui02/grocer',
      description:
        'A webapp that provides price comparison between supermarkets. This project is non-profit and aims to help those suffering from food insecurity.',
    },
    {
      title: 'NZCSA membership and event registration portal',
      image:
        nzcsaImage,
      github: 'https://github.com/UoaWDCC/NZCSA-Frontend',
      description:
        'A portal to allow students to signup for events hosted by the New Zealand Chinese Students Association. Allows online payment of memberbership fee as well as event fees through Bank transfer, Wechat pay, or Alipay',
      demo: 'https://nzcsa.wdcc.co.nz/',
    },
  ]

  const projectItems = projectsData.map((item, i) => (
    <ProjectCard
      key={i}
      title={item.title}
      image={item.image}
      github={item.github}
      description={item.description}
      demo={item.demo}
    />
  ))

  return <div className="projectCards">{projectItems}</div>
}
