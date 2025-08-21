# ------ Exercise 1

class Phone:
    def __init__(self, phone_number):
        self.phone_number = phone_number
        self.call_history = []
        self.messages = []

    def call(self, other_phone):
        call_record = f"Call from {self.phone_number} to {other_phone.phone_number}"
        print(call_record)
        self.call_history.append(call_record)
        other_phone.call_history.append(call_record)

    def show_call_history(self):
        print(self.call_history)

    def send_message(self, other_phone, content):
        message = {
            'to': other_phone.phone_number,
            'from': self.phone_number,
            'content': content
        }
        self.messages.append(message)
        other_phone.messages.append(message)

    def show_outgoing_messages(self):
        outgoing = []
        for message in self.messages:
            if message['from'] == self.phone_number:
                outgoing.append(message)
        print(outgoing)

    def show_incoming_messages(self):
        incoming = []
        for message in self.messages:
            if message['to'] == self.phone_number:
                incoming.append(message)
        print(incoming)

    def show_messages_from(self, other_phone):
        messages_from_contact = []
        for message in self.messages:
            if message['from'] == other_phone.phone_number and message['to'] == self.phone_number:
                messages_from_contact.append(message)
            elif message['to'] == other_phone.phone_number and message['from'] == self.phone_number:
                messages_from_contact.append(message)
        print(messages_from_contact)

# Test your code !!!
phone1 = Phone("111-222-333")
phone2 = Phone("444-555-666")
phone3 = Phone("777-888-999")

phone1.call(phone2)
phone2.call(phone3)

print("\nPhone 1 call history:")
phone1.show_call_history()
print("Phone 2 call history:")
phone2.show_call_history()

phone1.send_message(phone2, "Hello!")
phone2.send_message(phone1, "Hi, how are you?")
phone1.send_message(phone3, "Are you free tomorrow?")

print("\nPhone 1 outgoing messages:")
phone1.show_outgoing_messages()

print("\nPhone 1 incoming messages:")
phone1.show_incoming_messages()

print("\nMessages between Phone 1 and Phone 2:")
phone1.show_messages_from(phone2)


# ------ Exercise 2

# ------ Exercise 3

# ------ Exercise 4

# ------ Exercise 5

# ------ Exercise 6

# ------ Exercise 7

# ------ Exercise 8
