print("\n16. Análise de idade e sexo:")
homens = 0
mulheres = 0
idade_total = 0
idade_homens = 0
mulheres_20_mais = 0

for i in range(1, 6):
    print(f"\nPessoa {i}:")
    idade = int(input("Idade: "))
    sexo = input("Sexo (M/F): ").upper()
    
    idade_total += idade
    
    if sexo == 'M':
        homens += 1
        idade_homens += idade
    elif sexo == 'F':
        mulheres += 1
        if idade > 20:
            mulheres_20_mais += 1

print(f"\nResultados:")
print(f"a) Homens cadastrados: {homens}")
print(f"b) Mulheres cadastradas: {mulheres}")
print(f"c) Média de idade do grupo: {idade_total/5:.1f} anos")
if homens > 0:
    print(f"d) Média de idade dos homens: {idade_homens/homens:.1f} anos")
else:
    print(f"d) Média de idade dos homens: Nenhum homem cadastrado")
print(f"e) Mulheres com mais de 20 anos: {mulheres_20_mais}")
