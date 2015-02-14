UserDetails = new Mongo.Collection('userDetails');
Uploads = new FS.Collection('uploads',{
    stores:[new FS.Store.FileSystem('uploads',{path:'~/projectUploads'})]
});
