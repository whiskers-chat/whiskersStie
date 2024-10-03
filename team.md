<script setup>
import { VPTeamMembers } from 'vitepress/theme'

let members = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/161162126?v=4',
    name: 'Finley224',
    title: 'Backend Dev, Sysadmin/IT',
    desc: 'they/them',
    links: [
      { icon: 'github', link: 'https://github.com/Finley224' },
    ]
  },
  {
   avatar: 'https://avatars.githubusercontent.com/u/81255936?v=4',
   name: 'ajskateboarder',
   title: 'Backend Dev',
   desc: 'he/him',
   links: [
     { icon: 'github', link: 'https://github.com/ajskateboarder' },
   ]
 },
 {
   avatar: 'https://avatars.githubusercontent.com/u/89811520?v=4',
   name: 'Stripes',
   title: 'Frontend Dev',
   desc: 'they/them',
   links: [
     { icon: 'github', link: 'https://github.com/ArrowAced' },
   ]
 }
].sort( () => .5 - Math.random() );
</script>

# Our Team

These are the people who helped make this project possible. (Order of names is random and changes on each page load)
<VPTeamMembers size="small" :members="members" />