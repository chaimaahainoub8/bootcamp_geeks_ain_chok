# ------ Exercise 1
class Phone:
    def __init__(self, phone_number):
        self.phone_number = phone_number
        self.call_history = []
        self.messages = []

    def call(self, other_phone) :
        call_record = f"{self.phone_number} called {other_phone.phone_number}"
        print(call_record)
        self.call_history.append(call_record)

    def show_call_history(self):
        print(f"\n----CALL-HISTORY-FOR{self.phone_number}----")
        if not self.call_history:
            print("----NO-CALLS-MADE----")
        else :
            for record in self.call_history: 
                print(record)

    def send_message(self, other_phone, content):
        message_data ={
            'to' : other_phone.phone_number,
            'from' : self.phone_number ,
            'content' : content ,
        }
        self.messages.append(message_data)
        other_phone.messages.append(message_data)  
        print(f"message sent from {self.phone_number} to {other_phone.phone_number} . ")

    def show_all_messages(self) :
        print(f"\n--- All messages for {self.phone_number}----")
        if not self.messages :
            print("No messages .")
        else : 
            for msg in self.messages :
                print(msg)

    def show_outgoing_messages(self):
        print(f"\n----Outgoing Messages from {self.phone_number}---")
        outgoing = [msg for msg in self.messages if msg['from'] == self.phone_number]
        if not outgoing:
            print(" no outgoing messages.")
        else:
            for msg in outgoing :
                print(f"To: {msg['to']} , content : {msg['content']} . ")

    def show_incoming_messages(self) : 
        print(f"\n... Incoming messages to {self.phone_number}...")
        incoming = [msg for msg in self.messages if msg['to'] == self.phone_number]
        if not incoming :
            print(" No incoming messages .")
        else : 
            for msg in incoming : 
                print(f"From :{msg['from']} , content : {msg['content']}")



phone1 = Phone("111-222-333")
phone2 = Phone("444-555-666")

phone1.call(phone2)
phone1.call(phone2)
phone2.call(phone1)

phone1.show_call_history()
phone2.show_call_history() 


print("\n" + "="*20 + "\n")
phone1.send_message(phone2, "Hello, how are you?")
phone2.send_message(phone1, "I'm fine, thanks! And you?")
phone1.send_message(phone2, "Doing great!")


phone1.show_all_messages()
phone2.show_all_messages()


phone1.show_outgoing_messages()
phone1.show_incoming_messages()

print("-" * 10)
phone2.show_outgoing_messages()
phone2.show_incoming_messages()                    



# ------ Exercise 2

# ------ Exercise 3

# ------ Exercise 4

# ------ Exercise 5

# ------ Exercise 6

# ------ Exercise 7

# ------ Exercise 8
