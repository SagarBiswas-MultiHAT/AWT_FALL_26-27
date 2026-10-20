import {
  ConflictException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateEmployeeDto } from "./dto/create-employee.dto";
import { UpdateEmployeeDto } from "./dto/update-employee.dto";
import { Employee } from "./entities/employee.entity";

@Injectable()
export class EmployeesService {
  constructor(
    @InjectRepository(Employee)
    private readonly employeesRepository: Repository<Employee>,
  ) {}

  findAll(): Promise<Employee[]> {
    return this.employeesRepository.find({ order: { name: "ASC" } });
  }

  async findOne(id: string): Promise<Employee> {
    const employee = await this.employeesRepository.findOneBy({ id });
    if (!employee) {
      throw new NotFoundException(`Employee with ID ${id} was not found`);
    }
    return employee;
  }

  async create(dto: CreateEmployeeDto): Promise<Employee> {
    try {
      return await this.employeesRepository.save(
        this.employeesRepository.create(dto),
      );
    } catch (error) {
      if (error instanceof Error && error.message.includes("duplicate key")) {
        throw new ConflictException(
          "An employee with this email already exists",
        );
      }
      throw error;
    }
  }

  async update(id: string, dto: UpdateEmployeeDto): Promise<Employee> {
    const employee = await this.findOne(id);
    Object.assign(employee, dto);
    return this.employeesRepository.save(employee);
  }

  async remove(id: string): Promise<void> {
    const result = await this.employeesRepository.delete(id);
    if (!result.affected) {
      throw new NotFoundException(`Employee with ID ${id} was not found`);
    }
  }
}
