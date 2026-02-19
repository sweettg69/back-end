print("\n18. DESAFIO - Jogo de Adivinhação")
print("=" * 40)
import random

numero_secreto = random.randint(1, 10)
tentativas = 4

print("Tente adivinhar o número entre 1 e 10!")
print(f"Você tem {tentativas} tentativas.")

for tentativa in range(1, tentativas + 1):
    print(f"\nTentativa {tentativa} de {tentativas}")
    palpite = int(input("Digite seu palpite: "))
    
    if palpite == numero_secreto:
        print(f"PARABÉNS! Você acertou!")
        print(f"O número era {numero_secreto}")
        break
    elif palpite < numero_secreto:
        print("O número secreto é MAIOR que seu palpite.")
    else:
        print("O número secreto é MENOR que seu palpite.")
    
    if tentativa == tentativas:
        print(f"\nFIM DO JOGO!")
        print(f"O número secreto era {numero_secreto}")
