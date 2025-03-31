window.YaAuthSuggest.init(
    oauthQueryParams,
    tokenPageOrigin,
    {
        view: "button",
        parentId: "buttonContainerId",
        buttonSize: 'm',
        buttonView: 'main',
        buttonTheme: 'light',
        buttonBorderRadius: "22",
        buttonIcon: 'ya',
    }
)
    .then(({handler}) => handler())
    .then(data => console.log('Сообщение с токеном', data))
    .catch(error => console.log('Обработка ошибки', error))