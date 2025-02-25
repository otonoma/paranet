import os
import numpy as np

from omni.isaac.examples.base_sample import BaseSample
from omni.isaac.core.utils.nucleus import get_assets_root_path
from omni.isaac.wheeled_robots.robots import WheeledRobot
from omni.isaac.core.utils.types import ArticulationAction

from .hello_robot_actors import setup_actors, cleanup


class HelloWorld(BaseSample):
    def __init__(self) -> None:
        super().__init__()
        return

    def setup_scene(self):
        world = self.get_world()
        world.scene.add_default_ground_plane()
        assets_root_path = get_assets_root_path()
        jetbot_asset_path = assets_root_path + "/Isaac/Robots/Jetbot/jetbot.usd"
        self._jetbot = world.scene.add(
            WheeledRobot(
                prim_path="/World/Fancy_Robot",
                name="fancy_robot",
                wheel_dof_names=["left_wheel_joint", "right_wheel_joint"],
                create_robot=True,
                usd_path=jetbot_asset_path,
            )
        )
        return

    async def setup_post_load(self):
        self._world = self.get_world()
        self._jetbot = self._world.scene.get_object("fancy_robot")
        self._world.add_physics_callback("sending_actions", callback_fn=self.send_robot_actions)
        setup_actors(self)
        return

    def send_robot_actions(self, step_size):
        self._jetbot.apply_wheel_actions(ArticulationAction(joint_positions=None,
                                                            joint_efforts=None,
                                                            joint_velocities=5 * np.random.rand(2,)))
        return

    def world_cleanup(self):
        cleanup()
######

# from paranet_agent import actor, connector
# from paranet_agent.actor import BaseActor, Conversation

# @actor.type
# class TaskStatus:
#     status: str

# @actor.type
# class RobotPosition:
#     position: str

# @actor.actor
# class HelloRobot(BaseActor):
#     sim: HelloWorld
#     demo_status_options = ['waiting', 'running', 'stopped', 'failed']

#     def update_status(self, new_status):
#         if new_status in self.demo_status_options:
#             self.sim.current_status = new_status
#         else:
#             self.sim.current_status = "failed"

#     @actor.skill(subject='hello_robot', response=TaskStatus)
#     async def start(self, conv: Conversation) -> None:
#         try:
#             await self.sim._world.play_async()
#             self.update_status("running")
#             conv.send_response(TaskStatus(status=self.sim.current_status))
#         except Exception as e:
#             self.update_status("failed")
#             conv.send_response(TaskStatus(status=f"failed: {str(e)}"))

#     @actor.skill(subject='hello_robot', response=TaskStatus)
#     def ping(self, conv: Conversation) -> None:
#         """Retrieve current status of the demo."""
#         conv.send_response(TaskStatus(status=self.sim.current_status))

#     @actor.skill(subject='hello_robot', response=RobotPosition)
#     def get_position(self, conv: Conversation) -> None:
#         robo_pos, _ = self.sim._jetbot.get_world_pose()
#         conv.send_response(RobotPosition(position=str(robo_pos))) 


# def setup_actors(sim: HelloWorld):
#     """Handles actor registration separately for clarity."""
#     print("Starting Paranet Connector...")
#     connector.start(3000)
#     print("Registering HelloRobot Actor...")
#     actor.register_actor(HelloRobot(sim=sim))
#     actor.deploy('isaac', restart=False)
#     print("Actor successfully deployed.")