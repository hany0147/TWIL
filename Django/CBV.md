# 클래스 기반 함수(공식 문서 번역)
- `View`는 요청을 받고 응답을 반환하는 callable이다. 함수 그 이상이며, 장고는 뷰로 이용할 수 있는 일부 클래스의 예를 제공한다. 이걸 통해 상속과 mixin을 활용하여 view를 구성하고 코드를 재사용 할 수 있다. 차후 설명할 작업에 대한 `generic views`도 있지만, 당신의 유용 사례에 적합하게 재사용 가능한 view의 구조를 구축할 수 있다(즉, custom 할 수 있다). 자세한 내용은 CBV 참조 문소를 확인하라.  

## 기초적인 예시
- 장고는 광범위한 응용 프로그램에 적합한 기본 클래스 view를 제공합니다. 모든 view는 뷰를 url에 연결하고, http 메서드를 디스패칭하기 및 기타 공통 기능을 처리하는 클래스 뷰의 상속을 받습니다. `RedirectView`는 HTTP redirect를 제공하고, `TemplateView`는 템플릿도 랜더링하도록 기본 클래스를 확장합니다.

## URLconf 사용법
- generic view의 가장 직접적인 사용법은 URLconf에 직접 만드는 것입니다. CBV에서 몇 가지 특성만 변경하는 경우 `as_view()` 메서드 호출 자체에 전달 할수 있습니다.
```python
from django.urls import path
from django.views.generic import TemplateView

urlpatterns = [
    path('about/', TemplateView.as_view(template_name="about.html")),
]
```
- as_view()에 전달된 모든 인자(argument)는 해당 클래스에 설정된 속성을 오버라이딩(재정의)합니다. 상기의 예에서는 TemplateView에 있는 template_name을 설정합니다. 유사하게 RedirectView에서는 url 속성을 오버라이딩 할 수 있습니다. 

## Subclassing generic views
- generic view를 쓰는 두번째로 강력한 방법은 기존 뷰에서 상속하고 하위 클래스의 특성 또는 메서드를 오버라이딩하여 새 값이나 메서드를 제공하는 것이다.
- 예를 들어, 하나의 템플릿인 about.html을 보여주는 뷰를 생각해보세요. 장고는 TemplateView라는 generic view가 있으므로 subclassing하고 템플릿 이름을 오버라이딩 할 수 있습니다.
```python
from django.views.generic import TemplateView

class AboutView(TemplateView):
    template_name = "about.html"
```
- 그 다음 이 새로운 view를 URLconf에 추가해야 합니다. TemplateView는 함수가 아니라 클래스이므로, 함수와 같은 항목을 제공하는 as_view() 클래스 매서드로 URL을 가리켜야 합니다.
```python
from django.urls import path
from some_app.views import AboutView

urlpatterns = [
    path('about/', AboutView.as_view()),
]
```

## Supporting other HTTP methods¶
- 뷰를 API로 사용하여 HTTP를 통해 book 라이브러리에 액세스한다고 가정합시다. API 클라이언트는 연결하여 