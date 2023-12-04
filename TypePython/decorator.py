# decorator


def copyright(func):
    def new_func():
        print("하늬카피")
        func()

    return new_func


@copyright
def smile():
    print("😀")


@copyright
def angry():
    print("😡")


@copyright
def love():
    print("😍")


# smile = copyright(smile)
# angry = copyright(angry)
# love = copyright(love)
smile()
angry()
love()
