chrome.contextMenus.create({
    title: 'Translate with DeepL',
    type: 'normal',
    contexts: ['selection'],
    onclick: (info) => {
        const originalText = info.selectionText
        const url = `https://www.deepl.com/translator#en/ja/${encodeURIComponent(originalText)}`
        chrome.tabs.create({ url: url })
    }
})
