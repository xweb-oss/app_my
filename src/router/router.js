
    import House from '@/views/house/house.vue';
    import Mall from '@/views/mall/mall.vue';
    import My from '@/views/my/my.vue';
    import Type from '@/views/type/type.vue';
    import Detail from '@/views/house/detail.vue';
export const router_ = [
{
    path:"/home",
    redirect:"/home/house"
},
{
    path:"my",
    meta:{title:'my'},
    component: () => import('@/views/my/my.vue'),
    name:"my",
},
{
    path:"mall",
    meta:{title:'mall'},
    component: () => import('@/views/mall/mall.vue'),
    name:"mall",

},

{
    path:"type",
    meta:{title:'type'},
    component:Type,
    name:"type",
},
{
    path:"house",
    meta:{title:'house'},
    component: () => import('@/views/house/house.vue'),
    name:"house",
},
{
    path:"*",
    redirect:"/home/house"
}
]