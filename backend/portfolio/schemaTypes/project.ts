export default {
    name: 'projects',
    title: 'Project',
    type: 'document',
    fields: [
        {name: 'title', title: 'Title', type: 'string'},
        {name: 'description', title: 'Description', type: 'text'},
        {name: 'skills', title: 'Skills', type: 'array', of: [{type: 'string'}]},
        {name: 'thumbnail', title: 'Thumbnail', type: 'image'},
        {name: 'images', title: 'Images', type: 'array', of: [{type: 'image'}]},
    ]
}