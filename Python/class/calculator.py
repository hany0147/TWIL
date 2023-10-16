class FourCal(): # 클래스
    def setdata(self, first, second): # 메서드
        self.first = first
        self.second = second

    def add(self):
        result = self.first + self.second
        return result
    def mul(self):
        result = self.first * self.second
        return result
    def sub(self):
        result = self.first - self.second
        return result
    def div(self):
        result = self.first / self.second
        return result

cal1 = FourCal() # 객체 / FourCal의 인스턴스
print(type(cal1))
'''
- self 매개변수에 cal1 객체가 자동으로 할당됨.
- a.first = 2 -> 객체에 생성되는 객체만의 변수를 '객체변수' 또는 '속성'이라 부름
- 클래스로 만든 객체의 객체변수는 다른 객체의 객체변수에 상관없이 독립적인 값을 유지함.
'''
cal1.setdata(2, 4)
print(cal1.first)
print(cal1.add())
print(cal1.mul())
print(cal1.sub())
print(cal1.div())


# 생성자(constructor)
# 객체가 생성될 대 자동으로 호출되는 메서드
class FourCal2():
    def __init__(self, first, second):
        self.first = first
        self.second = second
    def add(self):
        result = self.first + self.second
        return result
    def mul(self):
        result = self.first * self.second
        return result
    def sub(self):
        result = self.first - self.second
        return result
    def div(self):
        result = self.first / self.second
        return result
print('=============================')
cal2 = FourCal2(4, 2)
print(cal2.first)
print(cal2.add())

print('=============================')
# 상속(inheritance)
class MoreFourCal(FourCal2):
    def pow(self):
        result = self.first ** self.second
        return result

cal3 = MoreFourCal(4, 2)
print(cal3.add())
print(cal3.pow())
print(cal3.div())

print('=============================')

# 메서드 오버라이딩
# 부모 클래스(상속한 클래스)에 있는 메서드를 동일한 이름으로 다시 만드는 것
class SafeFourCal(FourCal2):
    def div(self):
        if self.second == 0:
            return 0
        else:
            return self.first / self.second

cal4 = SafeFourCal(4, 0)
print(cal4.sub())
print(cal4.div())

# 클래스 변수
# 클래스 안에 변수 선언
# 클래스로 만든 모든 객체에 공유됨.
class Family():
    lastname = '김'

print(Family.lastname)

hany = Family()
hanul = Family()
print(hany.lastname)
print(hanul.lastname)