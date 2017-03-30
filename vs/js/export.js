window['onBeforePreChatDisplay'] = onBeforePreChatDisplay;
window['onAfterPreChatDisplay'] = onAfterPreChatDisplay;

window['onBeforePostChatDisplay'] = onBeforePostChatDisplay;
window['onAfterPostChatDisplay'] = onAfterPostChatDisplay;

window['onBeforeOfflineMessageDisplay'] = onBeforeOfflineMessageDisplay;
window['onAfterOfflineMessageDisplay'] = onAfterOfflineMessageDisplay;
window['onBeforeChatDisplay'] = onBeforeChatDisplay;
window['onAfterChatDisplay'] = onAfterChatDisplay;

window['PostChat'] = PostChat;
window['PreChat'] = PreChat;
window['OfflineMessage'] = OfflineMessage;
window['Chat'] = {
    getId: function () { return chatId },
    onQueueChanged: onChatQueueChanged,
    onChatEnded: onChatEnded,
    onOperatorJoined: onOperatorJoinedChat,
    getGreetingMessageDomElementId: function() {return "chat-greeting"}
};

window['switchToOfflineMessage'] = enter_offline;

window['initconfigs'] = initconfigs;
window['initialize'] = initialize;
window['onDomReady'] = onDomReady;
window['FieldType'] = field_type;
