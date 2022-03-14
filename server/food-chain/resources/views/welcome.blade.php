<h1>Welcome page</h1>
@foreach ($products->files as $item)
    <img src="{{$item->file_path}}" width="200" height="200" alt="">
@endforeach