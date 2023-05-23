# 인라인 폼셋
```python
class AlbumPhotoCV(LoginRequiredMixin, CreateView):
    model = Album
    fields = ['name', 'description']


PhotoInlineFormset = inlineformset_factory(Album, Photo,
    fields = ['image', 'title', 'description'],
    extra = 2)
```

